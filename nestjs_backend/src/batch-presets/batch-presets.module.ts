import { Module } from '@nestjs/common';
import { BatchPresetsController } from './batch-presets.controller';
import { BatchPresetsService } from './batch-presets.service';

@Module({
  controllers: [BatchPresetsController],
  providers: [BatchPresetsService],
})
export class BatchPresetsModule {}
