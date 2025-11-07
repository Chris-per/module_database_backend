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
      return createdItem.save();
  }

  async findAll(): Promise<ModuleBatch[]> {
      return this.orderModel.find().exec();
  }

  async findOne(id: string) {
    return this.orderModel.find({_id:id}).exec()

  }

  async update(id: string, updateMongoItemDto: UpdateModuleBatchDto) {
    console.log(updateMongoItemDto)
    return this.orderModel.updateOne({_id:id}, updateMongoItemDto).exec()
  }

  async remove(id: string) {
    const result = await this.orderModel.deleteOne({_id:id})
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Item with ID "${id}" not found.`);
    }
    return `This action removes a #${id} mongoItem`;
  }
}
