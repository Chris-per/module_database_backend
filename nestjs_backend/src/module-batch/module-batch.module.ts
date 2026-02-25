import { Module } from '@nestjs/common';
import { ModuleBatchService } from './module-batch.service';
import { ModuleBatchController } from './module-batch.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ModuleBatch, ModuleBatchSchema } from './schemas/modules.schema';
import { ModulesModule } from '../modules/modules.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ModuleBatch.name, schema: ModuleBatchSchema }]),
    ModulesModule,
  ],
  controllers: [ModuleBatchController],
  providers: [ModuleBatchService],
})
export class ModuleBatchModule {}
