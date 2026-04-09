import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateModuleBatchDto } from './dto/create-module-batch.dto';
import { UpdateModuleBatchDto } from './dto/update-module-batch.dto';
import { ModuleBatch, ModuleBatchDocument } from './schemas/modules.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
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

  async getBatchesForOrder(orderId: string): Promise<ModuleBatch[]> {
    console.log(`Fetching batches for orderId: ${orderId}`);
    return this.orderModel.find({ order_id: orderId }).exec();
  }

  async findByCustomBatchId(batchId: string): Promise<ModuleBatch[]> {
    return this.orderModel.find({ batch_id: batchId }).exec();
  }



}
