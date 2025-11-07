import { Test, TestingModule } from '@nestjs/testing';
import { ModuleBatchController } from './module-batch.controller';
import { ModuleBatchService } from './module-batch.service';

describe('ModuleBatchController', () => {
  let controller: ModuleBatchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModuleBatchController],
      providers: [ModuleBatchService],
    }).compile();

    controller = module.get<ModuleBatchController>(ModuleBatchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
