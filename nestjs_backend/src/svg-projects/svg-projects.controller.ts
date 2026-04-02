import { Controller, Get, Post, Put, Delete, Param, Body, Res } from '@nestjs/common';
import type { Response } from 'express';
import { SvgProjectsService } from './svg-projects.service';

@Controller('svg-projects')
export class SvgProjectsController {
  constructor(private readonly service: SvgProjectsService) {}

  @Get()
  list() {
    return this.service.list();
  }

  @Get(':id/download')
  download(@Param('id') id: string, @Res() res: Response) {
    const filepath = this.service.getFilePath(id);
    const data = this.service.get(id);
    const filename = (data.meta?.name ?? id).replace(/[^a-z0-9_-]/gi, '_') + '.moduledb';
    res.download(filepath, filename);
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
