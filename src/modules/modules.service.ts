import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateModuleDto, iv_results_dto, Process_data_dto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
import { Modules, ModuleDocument } from './schemas/modules.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ModulesService {
  
    constructor(@InjectModel(Modules.name) private orderModel: Model<ModuleDocument>) {}
  
  
    async create(createItemDto: CreateModuleDto): Promise<Modules> {
        console.log("Creating new module with data:", createItemDto);
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
      // console.log(updateMongoItemDto)
      // let org_item = this.orderModel.find({_id:id}).exec()
      // let new_item = {...org_item, updateMongoItemDto}
      // return this.orderModel.updateOne({_id:id}, new_item).exec()
      console.log("org:")
      console.log(await this.orderModel.find({_id:id}).exec())
      let new_value  = await this.orderModel.updateOne({_id:id}, updateMongoItemDto).exec()
      console.log("new value")
      console.log(updateMongoItemDto)
      return new_value
    }

    async insertIvData(moduleId: string, ivData: iv_results_dto) {
        const updatedModule = await this.orderModel.findByIdAndUpdate(
            moduleId,
            { $push: { iv_result: ivData } },
            { new: true }
        );
        if (!updatedModule) {
            throw new NotFoundException('Module not found');
        }
        return updatedModule;
    }

    async insertProcessData(moduleId: string, processData: Process_data_dto) {
        const updatedModule = await this.orderModel.findByIdAndUpdate(
            moduleId,
            { $push: { 'process_data_list': processData } },
            { new: true }
        );
        if (!updatedModule) {
            throw new NotFoundException('Module not found');
        }
        return updatedModule;
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

    async findByOrderId(orderId: string): Promise<Modules[]> {
      return this.orderModel.find({ order_id: orderId }).exec();
    }

    async findByBatchId(batchId: string): Promise<Modules[]> {
      return this.orderModel.find({ batch_id: batchId }).exec();
    }
}
