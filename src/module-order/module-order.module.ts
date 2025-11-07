import { Module } from '@nestjs/common';
import { ModuleOrderService } from './module-order.service';
import { ModuleOrderController } from './module-order.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ModuleOrder, ModuleOrderSchema } from './schemas/module-order.schema';


@Module({
    imports: [MongooseModule.forFeature([{ name: ModuleOrder.name, schema: ModuleOrderSchema }])],
    
  controllers: [ModuleOrderController],
  providers: [ModuleOrderService],
})
export class ModuleOrderModule {}
