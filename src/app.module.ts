import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModuleOrderModule } from './module-order/module-order.module';
import { ModuleBatchModule } from './module-batch/module-batch.module';
import { ModulesModule } from './modules/modules.module';



@Module({
  // imports: [MongooseModule.forRoot("mongodb://admin:password@192.168.178.143:27017"), MongoItemsModule, ModuleOrderModule],
  imports: [MongooseModule.forRoot("mongodb://sunplugged:sunplugged@192.168.178.143:27017/moduleorders"), ModuleOrderModule, ModuleBatchModule, ModulesModule],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
