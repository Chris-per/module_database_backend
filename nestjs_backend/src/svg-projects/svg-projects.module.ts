import { Module } from '@nestjs/common';
import { SvgProjectsController } from './svg-projects.controller';
import { SvgProjectsService } from './svg-projects.service';

@Module({
  controllers: [SvgProjectsController],
  providers: [SvgProjectsService],
})
export class SvgProjectsModule {}
