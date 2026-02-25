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
    const updated = await this.orderModel.findByIdAndUpdate(
      id,
      updateMongoItemDto,
      { new: true, runValidators: true }
    ).exec();
    console.log('Updated object:', updated);
    return updated;
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



}
