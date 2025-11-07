import { Test, TestingModule } from '@nestjs/testing';
import { ModuleOrderController } from './module-order.controller';
import { ModuleOrderService } from './module-order.service';

describe('ModuleOrderController', () => {
  let controller: ModuleOrderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModuleOrderController],
      providers: [ModuleOrderService],
    }).compile();

    controller = module.get<ModuleOrderController>(ModuleOrderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
