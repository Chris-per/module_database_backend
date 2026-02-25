import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ModulesService } from './modules.service';
import { CreateModuleDto, iv_results_dto, Process_data_dto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
import { Modules } from './schemas/modules.schema';
import { plainToInstance } from 'class-transformer';

@Controller('modules')
export class ModulesController {
  constructor(private readonly modulesService: ModulesService) {}


  // ValidationPipe option: whitelist: only known parameters are accepted, forbidNonWhitelisted returns error 500 when unknown values are sent
  @Put()
  // @UsePipes(new ValidationPipe({transform: true, forbidNonWhitelisted: true, whitelist: true, stopAtFirstError: true}))
  async create(@Body() createItemDto: CreateModuleDto): Promise<Modules> {
    console.log("in module_order PUT")
    console.log("createItemDto")
    console.log(createItemDto)
    // let module_dto = await this.modulesService.create(createItemDto)
    
    // console.log("module_dto")
    // console.log(module_dto)    
    return await this.modulesService.create(createItemDto);
  }

  @Get()
  async findAll(): Promise<Modules[]> {
    console.log("in module_order GET")
    console.log("Get without id")
    return this.modulesService.findAll();
  }

  @Get('order/:orderId/process-data')
  async getProcessDataForOrder(@Param('orderId') orderId: string) {
    return this.modulesService.getProcessDataForOrder(orderId);
  }

  @Get('order/:orderId')
  async getModulesByOrder(@Param('orderId') orderId: string): Promise<Modules[]> {
    return this.modulesService.findByOrderId(orderId);
  }

  @Get('batch/:batchId')
  async getModulesByBatch(@Param('batchId') batchId: string): Promise<Modules[]> {
    return this.modulesService.findByBatchId(batchId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string){
    console.log("in module_order GET ${id}")
    console.log("got an id ${id}")
    
    return this.modulesService.findOne(id);
  }

  @Post('order/:orderId/remove-process-data')
  async removeProcessDataFromOrder(
    @Param('orderId') orderId: string,
    @Body() body: { removeIndices: { moduleId: string, index: number }[] }
  ) {
    return this.modulesService.removeProcessDataFromModules(orderId, body.removeIndices);
  }

  @Post(':id/add_iv_data')
  async addIvData(
      @Param('id') id: string,
      @Body() ivData: iv_results_dto,
  ) {
      return this.modulesService.insertIvData(id, ivData);
  }

  @Post(':id/add_process_data')
    async addProcessData(
        @Param('id') id: string,
        @Body() processData: Process_data_dto,
    ) {
        return this.modulesService.insertProcessData(id, processData);
    }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateMongoItemDto: UpdateModuleDto) {
    console.log("in module_order PATCH")
    console.log("updateMongoItemDto")
    console.log(updateMongoItemDto)   
    return this.modulesService.update(id, updateMongoItemDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    console.log("removing item")
    if(id!= "delete_all") {
      console.log("removing item with id:", id)
      await this.modulesService.remove(id);
      return { success: true, message: `Module ${id} deleted successfully.` };
    }
    else
    {
      await this.modulesService.remove_all();
      return { success: true, message: "All modules deleted successfully." };
    }
  }



}
