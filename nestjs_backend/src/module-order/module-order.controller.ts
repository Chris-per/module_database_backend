import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ModuleOrderService } from './module-order.service';
import { CreateModuleOrderDto } from './dto/create-module-order.dto';
import { UpdateModuleOrderDto } from './dto/update-module-order.dto';
import { ModuleOrder } from './entities/module-order.entity';

@Controller('module-order')
export class ModuleOrderController {
  @Get('get_list')
  async getList(): Promise<{ _id: string; name: string }[]> {
    const orders = await this.moduleOrderService.getIdAndNameList();
    return orders;
  }
  constructor(private readonly moduleOrderService: ModuleOrderService) {}

  @Put()
  async create(@Body() createItemDto: CreateModuleOrderDto): Promise<ModuleOrder> {
    console.log("in module_order PUT")
    return this.moduleOrderService.create(createItemDto);
  }

  @Get()
  async findAll(): Promise<ModuleOrder[]> {
    console.log("in module_order GET")
    console.log("Get without id")
    return this.moduleOrderService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string){
    console.log("in module_order GET ${id}")
    console.log("got an id ${id}")
    
    return this.moduleOrderService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateMongoItemDto: UpdateModuleOrderDto) {
    return this.moduleOrderService.update(id, updateMongoItemDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    console.log("removing item")
    if (id != "delete_all") {
      await this.moduleOrderService.remove(id);
      return { success: true, message: `Order ${id} deleted successfully.` };
    } else {
      await this.moduleOrderService.remove_all();
      return { success: true, message: "All orders deleted successfully." };
    }
  }
}
