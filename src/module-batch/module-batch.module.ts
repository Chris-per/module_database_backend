import { Module } from '@nestjs/common';
import { ModuleBatchService } from './module-batch.service';
import { ModuleBatchController } from './module-batch.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ModuleBatch, ModuleBatchSchema } from './schemas/modules.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: ModuleBatch.name, schema: ModuleBatchSchema }])],
  controllers: [ModuleBatchController],
  providers: [ModuleBatchService],
})
export class ModuleBatchModule {}
