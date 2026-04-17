import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ModuleBatchService } from './module-batch.service';
import { CreateModuleBatchDto } from './dto/create-module-batch.dto';
import { UpdateModuleBatchDto } from './dto/update-module-batch.dto';
import { QueryBatchDataDto } from './dto/query-batch-data.dto';
import { ModuleBatch } from './entities/module-batch.entity';

@Controller('module-batch')
export class ModuleBatchController {
  constructor(private readonly moduleBatchService: ModuleBatchService) {}

  @Put()
  async create(@Body() createItemDto: CreateModuleBatchDto): Promise<ModuleBatch> {
    console.log("in module_order PUT")
    return this.moduleBatchService.create(createItemDto);
  }

  @Get()
  async findAll(): Promise<ModuleBatch[]> {
    console.log("in module_batch GET")
    console.log("Get without id")
    return this.moduleBatchService.findAll();
  }

  @Get('by-batch-id/:batchId')
  async getByCustomBatchId(@Param('batchId') batchId: string): Promise<ModuleBatch[]> {
    return this.moduleBatchService.findByCustomBatchId(batchId);
  }

  /**
   * POST /module-batch/query
   *
   * Returns configurable process data and batch file (blueprint) for a given
   * batchId or moduleId. All include fields default to true when omitted.
   *
   * Body example:
   * {
   *   "batchId": "B001",          // or "moduleId": "M001"
   *   "include": {
   *     "blueprint": true,
   *     "batchfile": true,
   *     "processLog": true,
   *     "moduleList": false,
   *     "moduleProcessData": true,
   *     "moduleIvData": false
   *   }
   * }
   */
  @Post('query')
  async queryBatchData(@Body() dto: QueryBatchDataDto): Promise<any> {
    return this.moduleBatchService.queryBatchData(dto);
  }

  /**
   * GET /module-batch/module-scribing/:moduleId
   *
   * Returns the scribing objects from the merged batch blueprint that belong to
   * the given module, with vertices translated back to module-relative coordinates.
   */
  @Get('module-scribing/:moduleId')
  async getModuleScribingObjects(@Param('moduleId') moduleId: string): Promise<any> {
    return this.moduleBatchService.getModuleScribingObjects(moduleId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string){
    console.log("in module_order GET ${id}")
    console.log("got an id ${id}")
    
    return this.moduleBatchService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateMongoItemDto: UpdateModuleBatchDto) {
    console.log("updating item");
    console.log(updateMongoItemDto);
    return this.moduleBatchService.update(id, updateMongoItemDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    console.log("removing item");
    if (id != "delete_all") {
      await this.moduleBatchService.remove(id);
      return { success: true, message: `Batch ${id} deleted successfully.` };
    } else {
      await this.moduleBatchService.remove_all();
      return { success: true, message: "All batches deleted successfully." };
    }
  }

  // @Get('order/:orderId')
  // async getBatchesForOrder(@Param('orderId') orderId: string): Promise<ModuleBatch[]> {
  //   return this.moduleBatchService.getBatchesForOrder(orderId);
  // }

  @Get('order/:orderId')
  async getBatchesForOrder(@Param('orderId') orderId: string): Promise<ModuleBatch[]> {
    console.log(`Controller: Fetching batches for orderId: ${orderId}`);
    let orders = this.moduleBatchService.getBatchesForOrder(orderId);
    console.log(`Controller: Retrieved batches: ${JSON.stringify(orders)}`);
    return orders
  }
}
