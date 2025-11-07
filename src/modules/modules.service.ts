import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
import { Modules, ModuleDocument } from './schemas/modules.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ModulesService {
  
    constructor(@InjectModel(Modules.name) private orderModel: Model<ModuleDocument>) {}
  
  
    async create(createItemDto: CreateModuleDto): Promise<Modules> {
        const createdItem = new this.orderModel(createItemDto);
        return createdItem.save();
    }
  
    async findAll(): Promise<Modules[]> {
        return this.orderModel.find().exec();
    }
  
    async findOne(id: string) {
      return this.orderModel.find({_id:id}).exec()
  
    }
  
    async update(id: string, updateMongoItemDto: UpdateModuleDto) {
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
