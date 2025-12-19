import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateModuleBatchDto } from './dto/create-module-batch.dto';
import { UpdateModuleBatchDto } from './dto/update-module-batch.dto';
import { ModuleBatch, ModuleBatchDocument } from './schemas/modules.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ModuleBatchService {

  constructor(@InjectModel(ModuleBatch.name) private orderModel: Model<ModuleBatchDocument>) {}


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
    const result = await this.orderModel.deleteOne({_id:id})
    
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Item with ID "${id}" not found.`);
    }
    return `This action removes a #${id} mongoItem`;
  }

  async remove_all() {
    console.log("deleting all")
    const result = await this.orderModel.deleteMany()
    // const result = await this.orderModel.deleteOne({_id:id})
    if (result.deletedCount === 0) {
        throw new NotFoundException(`nothing deleted`);
    }
    return `This action removes all Module mongoItems`; 
  }

  async getBatchesForOrder(orderId: string): Promise<ModuleBatch[]> {
    console.log(`Fetching batches for orderId: ${orderId}`);
    return this.orderModel.find({ order_id: orderId }).exec();
  }



}
