import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ModuleBatchService } from './module-batch.service';
import { CreateModuleBatchDto } from './dto/create-module-batch.dto';
import { UpdateModuleBatchDto } from './dto/update-module-batch.dto';
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
    console.log("in module_order GET")
    console.log("Get without id")
    return this.moduleBatchService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string){
    console.log("in module_order GET ${id}")
    console.log("got an id ${id}")
    
    return this.moduleBatchService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateMongoItemDto: UpdateModuleBatchDto) {
    return this.moduleBatchService.update(id, updateMongoItemDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    console.log("removing item")
    return this.moduleBatchService.remove(id);
  }
}
