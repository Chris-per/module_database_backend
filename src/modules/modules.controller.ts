import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ModulesService } from './modules.service';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
import { Modules } from './schemas/modules.schema';

@Controller('modules')
export class ModulesController {
  constructor(private readonly modulesService: ModulesService) {}

  @Put()
  async create(@Body() createItemDto: CreateModuleDto): Promise<Modules> {
    console.log("in module_order PUT")
    return this.modulesService.create(createItemDto);
  }

  @Get()
  async findAll(): Promise<Modules[]> {
    console.log("in module_order GET")
    console.log("Get without id")
    return this.modulesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string){
    console.log("in module_order GET ${id}")
    console.log("got an id ${id}")
    
    return this.modulesService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateMongoItemDto: UpdateModuleDto) {
    return this.modulesService.update(id, updateMongoItemDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    console.log("removing item")
    return this.modulesService.remove(id);
  }
}
