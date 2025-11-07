import { Test, TestingModule } from '@nestjs/testing';
import { ModuleBatchService } from './module-batch.service';

describe('ModuleBatchService', () => {
  let service: ModuleBatchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModuleBatchService],
    }).compile();

    service = module.get<ModuleBatchService>(ModuleBatchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
