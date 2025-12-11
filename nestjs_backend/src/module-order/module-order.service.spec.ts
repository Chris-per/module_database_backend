import { Test, TestingModule } from '@nestjs/testing';
import { ModuleOrderService } from './module-order.service';

describe('ModuleOrderService', () => {
  let service: ModuleOrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModuleOrderService],
    }).compile();

    service = module.get<ModuleOrderService>(ModuleOrderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
