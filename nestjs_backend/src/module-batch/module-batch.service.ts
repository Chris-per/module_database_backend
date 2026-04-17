import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreateModuleBatchDto } from './dto/create-module-batch.dto';
import { UpdateModuleBatchDto } from './dto/update-module-batch.dto';
import { QueryBatchDataDto } from './dto/query-batch-data.dto';
import { ModuleBatch, ModuleBatchDocument } from './schemas/modules.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { ModulesService } from '../modules/modules.service';

@Injectable()
export class ModuleBatchService {

  constructor(
    @InjectModel(ModuleBatch.name) private orderModel: Model<ModuleBatchDocument>,
    private modulesService: ModulesService
  ) {}


  async create(createItemDto: CreateModuleBatchDto): Promise<ModuleBatch> {
      const createdItem = new this.orderModel(createItemDto);
      console.log("Creating module batch:", createdItem);
      return createdItem.save();
  }

  async findAll(): Promise<ModuleBatch[]> {
      return this.orderModel.find().exec();
  }

  async findOne(id: string): Promise<ModuleBatch[]>  {
    return this.orderModel.find({_id:id}).exec()

  }

  async update(id: string, updateMongoItemDto: UpdateModuleBatchDto) {
    const { laser_processing, dispenser_processing, dielectric_print_job, ...otherFields } = updateMongoItemDto as any;

    const updateOps: any = {};

    // Apply non-process-log fields via $set
    if (Object.keys(otherFields).length > 0) {
      updateOps.$set = otherFields;
    }

    // Convert incoming process data into process_log entries and $push them
    const newEntries: any[] = [];

    if (laser_processing) {
      const ts = laser_processing.processing_date
        ? new Date(laser_processing.processing_date)
        : new Date();
      newEntries.push({
        entry_key: `laser_${this.formatTimestampKey(ts)}`,
        machine_type: 'laser',
        timestamp: ts,
        laser_settings: laser_processing.laser_settings,
        laser_log: laser_processing.laser_log,
      });
    }

    if (dispenser_processing) {
      const ts = dispenser_processing.processing_date
        ? new Date(dispenser_processing.processing_date)
        : new Date();
      newEntries.push({
        entry_key: `dispenser_${this.formatTimestampKey(ts)}`,
        machine_type: 'dispenser',
        timestamp: ts,
        dispenser_settings: dispenser_processing.dispenser_settings,
        dispenser_log: dispenser_processing.dispenser_log,
      });
    }

    if (dielectric_print_job) {
      const ts = dielectric_print_job.timestamp
        ? new Date(dielectric_print_job.timestamp)
        : new Date();
      newEntries.push({
        entry_key: `dielectric_${this.formatTimestampKey(ts)}`,
        machine_type: 'dielectric',
        timestamp: ts,
        dielectric_data: dielectric_print_job,
      });
    }

    if (newEntries.length > 0) {
      updateOps.$push = { process_log: { $each: newEntries } };
    }

    if (Object.keys(updateOps).length === 0) {
      return this.orderModel.findById(id).exec();
    }

    const updated = await this.orderModel.findByIdAndUpdate(id, updateOps, { new: true }).exec();
    console.log('Updated object:', updated);
    return updated;
  }

  /** Formats a Date as "YYYY-MM-DD.HH:mm.SSS" for use in process_log entry keys. */
  private formatTimestampKey(date: Date): string {
    const pad = (n: number, len = 2) => n.toString().padStart(len, '0');
    return (
      `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}` +
      `.${pad(date.getHours())}:${pad(date.getMinutes())}.${pad(date.getMilliseconds(), 3)}`
    );
  }

  async remove(id: string) {
    // First, find the batch to get its batch_id
    const batch = await this.orderModel.findById(id).exec();
    
    if (!batch) {
      throw new NotFoundException(`Item with ID "${id}" not found.`);
    }

    // Delete all modules associated with this batch
    const batchId = batch.batch_id || id; // Use batch_id if available, otherwise use the MongoDB _id
    const modulesToDelete = await this.modulesService.findByBatchId(batchId);
    
    console.log(`Deleting ${modulesToDelete.length} modules associated with batch ${batchId}`);
    
    for (const module of modulesToDelete) {
      await this.modulesService.remove((module as any)._id.toString());
    }

    // Delete the batch itself
    const result = await this.orderModel.deleteOne({_id:id})
    
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Item with ID "${id}" not found.`);
    }
    
    return `This action removes batch #${id} and ${modulesToDelete.length} associated modules`;
  }

  async remove_all() {
    console.log("deleting all batches");
    
    // First, get all batches to find their batch_ids
    const batches = await this.orderModel.find().exec();
    
    // Delete all modules associated with any batch
    let totalModulesDeleted = 0;
    for (const batch of batches) {
      const batchId = batch.batch_id || (batch as any)._id.toString();
      const modulesToDelete = await this.modulesService.findByBatchId(batchId);
      
      for (const module of modulesToDelete) {
        await this.modulesService.remove((module as any)._id.toString());
        totalModulesDeleted++;
      }
    }
    
    console.log(`Deleted ${totalModulesDeleted} modules associated with batches`);
    
    // Delete all batches
    const result = await this.orderModel.deleteMany()
    
    if (result.deletedCount === 0) {
        throw new NotFoundException(`nothing deleted`);
    }
    
    return `This action removes all ${result.deletedCount} batches and ${totalModulesDeleted} associated modules`; 
  }

  /**
   * Returns the scribing objects from the merged batch blueprint that belong to a
   * specific module, with vertices translated back to module-relative coordinates.
   *
   * The batch blueprint is a merged file where every scribing object from the
   * per-module template has been duplicated N times (once per module) and shifted
   * by each module's origin. This method reverses that: it filters the merged
   * scribing objects by bounding box and subtracts the origin offset.
   */
  async getModuleScribingObjects(moduleId: string): Promise<any> {
    // 1. Find the module document (stores origin + batch_id)
    const modules = await this.modulesService.findByCustomModuleId(moduleId);
    if (!modules.length) {
      throw new NotFoundException(`Module with module_id "${moduleId}" not found`);
    }
    const module = modules[0] as any;
    if (!module.origin) {
      throw new NotFoundException(`Module "${moduleId}" has no stored origin`);
    }
    const origin = module.origin;

    // 2. Find the batch
    const batchId = module.batch_id;
    if (!batchId) {
      throw new NotFoundException(`Module "${moduleId}" has no associated batch_id`);
    }
    const batches = await this.findBatchByIdOrCustom(batchId);
    if (!batches.length) {
      throw new NotFoundException(`Batch with batch_id "${batchId}" not found`);
    }
    const batch = batches[0] as any;

    const scribingObjects: any[] = batch.blueprint?.batchFile?.jsonContent?.scribingObjects ?? [];
    if (!scribingObjects.length) {
      return { module_id: moduleId, origin, module_size: null, scribing_object_count: 0, scribing_objects: [] };
    }

    // 3. Recover the fiducial translation applied during addFiducialsToBlueprintFile.
    //    That function shifts all module vertices so min = Math.max(2, spacing/2), then
    //    adds fiducials at (0,0) and center marking lines with *negative* coordinates
    //    (e.g. y=-3 for bottom marks, x=-3 for left marks).  Including those objects
    //    in a global-min search gives wrong values — exclude FIDUCIAL and MARKING types.
    const moduleScribingObjects = scribingObjects.filter((obj: any) => {
      const t = obj.type?.toString();
      return t !== 'SCRIBING_TYPE_FIDUCIAL' && t !== 'SCRIBING_TYPE_MARKING';
    });
    const moduleVerts = moduleScribingObjects.flatMap((obj: any) => obj.vertices ?? []);
    const rawMinX = Math.min(...moduleVerts.map((v: any) => v.x ?? Infinity));
    const rawMinY = Math.min(...moduleVerts.map((v: any) => v.y ?? Infinity));
    const translateX = isFinite(rawMinX) ? rawMinX : 0;
    const translateY = isFinite(rawMinY) ? rawMinY : 0;

    // 4. Compute per-module blueprint size from the stored module origins on the batch.
    //    Adjacent origins differ by (module_size + spacing), so module_size = step - spacing.
    const batchModules: any[] = batch.modules ?? [];
    const spacing = batch.spacing ?? { x: 0, y: 0 };
    const xOrigins = [...new Set(batchModules.map((m: any) => m.origin?.x ?? 0))]
      .map(Number).sort((a, b) => a - b);
    const yOrigins = [...new Set(batchModules.map((m: any) => m.origin?.y ?? 0))]
      .map(Number).sort((a, b) => a - b);

    const moduleWidth = xOrigins.length > 1
      ? (xOrigins[1] - xOrigins[0]) - (spacing.x ?? 0)
      : (batch.batch_size?.x ?? 0) - (spacing.x ?? 0);
    const moduleHeight = yOrigins.length > 1
      ? (yOrigins[1] - yOrigins[0]) - (spacing.y ?? 0)
      : (batch.batch_size?.y ?? 0) - (spacing.y ?? 0);

    // 5. Effective bounding box of this module in stored (post-fiducial) blueprint coordinates
    const eps = 0.5; // mm tolerance for floating-point edge cases
    const ox = (origin.x ?? 0) + translateX;
    const oy = (origin.y ?? 0) + translateY;

    // 6. Filter: keep module scribing objects whose vertices all fall within the bounding box.
    //    FIDUCIAL and MARKING objects are excluded up front (they live outside module areas
    //    and have coordinates that would otherwise produce false positives).
    //    Checking ALL vertices (not just vertices[0]) prevents lines whose start point
    //    is inside the box but whose end point belongs to the adjacent module from leaking in.
    const filtered = moduleScribingObjects.filter((obj: any) => {
      const verts: any[] = obj.vertices ?? [];
      if (!verts.length) return false;
      return verts.every((v: any) => {
        const vx = v.x ?? 0;
        const vy = v.y ?? 0;
        return vx >= ox - eps && vx <= ox + moduleWidth + eps
            && vy >= oy - eps && vy <= oy + moduleHeight + eps;
      });
    });

    // 7. Translate vertices back to module-relative coordinates (origin = 0,0)
    const round3 = (n: number) => Math.round(n * 1000) / 1000;
    const relative = filtered.map((obj: any) => ({
      ...obj,
      vertices: obj.vertices?.map((v: any) => ({
        ...v,
        x: round3((v.x ?? 0) - ox),
        y: round3((v.y ?? 0) - oy),
      })),
    }));

    return {
      module_id: moduleId,
      batch_id: batchId,
      origin,
      module_size: { x: round3(moduleWidth), y: round3(moduleHeight) },
      scribing_object_count: relative.length,
      scribing_objects: relative,
    };
  }

  async getBatchesForOrder(orderId: string): Promise<ModuleBatch[]> {
    console.log(`Fetching batches for orderId: ${orderId}`);
    return this.orderModel.find({ order_id: orderId }).exec();
  }

  async findByCustomBatchId(batchId: string): Promise<ModuleBatch[]> {
    return this.findBatchByIdOrCustom(batchId);
  }

  /**
   * Looks up a batch by custom batch_id field first, then falls back to MongoDB _id.
   * Handles the common case where the module's batch_id field stores the ObjectId.
   */
  private async findBatchByIdOrCustom(batchId: string): Promise<ModuleBatch[]> {
    const byField = await this.orderModel.find({ batch_id: batchId }).exec();
    if (byField.length > 0) return byField;
    if (isValidObjectId(batchId)) {
      const byId = await this.orderModel.find({ _id: batchId }).exec();
      if (byId.length > 0) return byId;
    }
    return [];
  }

  /**
   * Unified query endpoint: resolves a batch (or the batch of a module) and returns
   * a configurable response containing blueprint, process log, and per-module data.
   */
  async queryBatchData(dto: QueryBatchDataDto): Promise<any> {
    if (!dto.batchId && !dto.moduleId) {
      throw new BadRequestException('Provide at least one of batchId or moduleId');
    }

    // Resolve the batch document
    let batch: ModuleBatch | null = null;
    let resolvedBatchId: string | null = null;

    if (dto.moduleId) {
      // Look up the module first to find its batch_id
      const modules = await this.modulesService.findByCustomModuleId(dto.moduleId);
      if (!modules.length) {
        throw new NotFoundException(`Module with module_id "${dto.moduleId}" not found`);
      }
      resolvedBatchId = (modules[0] as any).batch_id;
      if (!resolvedBatchId) {
        throw new NotFoundException(`Module "${dto.moduleId}" has no associated batch_id`);
      }
    } else {
      resolvedBatchId = dto.batchId!;
    }

    const batches = await this.findBatchByIdOrCustom(resolvedBatchId);
    if (!batches.length) {
      throw new NotFoundException(`Batch with batch_id "${resolvedBatchId}" not found`);
    }
    batch = batches[0];

    // Determine which fields to include (default: all true when include is omitted)
    const inc = dto.include ?? {};
    const allByDefault = dto.include === undefined || dto.include === null;
    const want = (flag: boolean | undefined) => allByDefault || flag === true;

    // Build batch section
    const batchOut: any = {
      _id: (batch as any)._id,
      batch_id: (batch as any).batch_id,
      batch_name: (batch as any).batch_name,
      order_id: (batch as any).order_id,
    };

    if (want(inc.batchfile)) {
      batchOut.batchfile = (batch as any).batchfile;
    }
    if (want(inc.blueprint)) {
      batchOut.blueprint = (batch as any).blueprint ?? null;
    }
    if (want(inc.processLog)) {
      batchOut.process_log = (batch as any).process_log ?? [];
    }
    if (want(inc.moduleList)) {
      batchOut.modules = (batch as any).modules ?? [];
    }

    const result: any = { batch: batchOut };

    // Fetch per-module data from the modules collection when needed
    if (want(inc.moduleProcessData) || want(inc.moduleIvData)) {
      const modulesDocs = await this.modulesService.findByBatchId(resolvedBatchId);
      result.moduleData = modulesDocs.map((m: any) => {
        const entry: any = {
          _id: m._id,
          module_id: m.module_id,
          name: m.name,
        };
        if (want(inc.moduleProcessData)) {
          entry.process_data_list = m.process_data_list ?? [];
        }
        if (want(inc.moduleIvData)) {
          entry.iv_result = m.iv_result ?? [];
        }
        return entry;
      });
    }

    return result;
  }



}
