import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateModuleOrderDto } from './dto/create-module-order.dto';
import { UpdateModuleOrderDto } from './dto/update-module-order.dto';
import { InjectModel } from '@nestjs/mongoose';
import { ModuleOrder } from './entities/module-order.entity';
import { Model } from 'mongoose';
import { ModuleOrderDocument } from './schemas/module-order.schema';

@Injectable()
export class ModuleOrderService {

  constructor(@InjectModel(ModuleOrder.name) private orderModel: Model<ModuleOrderDocument>) {}


  async create(createItemDto: CreateModuleOrderDto): Promise<ModuleOrder> {
      const createdItem = new this.orderModel(createItemDto);
      return createdItem.save();
  }

  async findAll(): Promise<ModuleOrder[]> {
      return this.orderModel.find().exec();
  }

  async findOne(id: string) : Promise<ModuleOrder>{
    return this.orderModel.find({_id:id}).exec()

  }

  update(id: string, updateMongoItemDto: UpdateModuleOrderDto) {
    this.orderModel.updateOne({_id:id}, updateMongoItemDto)
    return this.orderModel.find({_id:id}).exec()
  }

  async remove(id: string) {
    const result = await this.orderModel.deleteOne({_id:id})
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Item with ID "${id}" not found.`);
    }
    return `This action removes a #${id} mongoItem`;
  }
}