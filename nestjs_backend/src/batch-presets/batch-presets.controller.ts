import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { BatchPresetsService } from './batch-presets.service';

@Controller('batch-presets')
export class BatchPresetsController {
  constructor(private readonly service: BatchPresetsService) {}

  @Get()
  list() {
    return this.service.list();
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.service.get(id);
  }

  @Post()
  create(@Body() body: { name: string; data: any }) {
    return this.service.create(body.name ?? 'Untitled', body.data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: { name?: string; data: any }) {
    this.service.update(id, body.name, body.data);
    return { success: true };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.service.delete(id);
    return { success: true };
  }
}
