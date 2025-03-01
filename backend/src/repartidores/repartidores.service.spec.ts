import { Test, TestingModule } from '@nestjs/testing';
import { RepartidoresService } from './repartidores.service';

describe('RepartidoresService', () => {
  let service: RepartidoresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RepartidoresService],
    }).compile();

    service = module.get<RepartidoresService>(RepartidoresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
