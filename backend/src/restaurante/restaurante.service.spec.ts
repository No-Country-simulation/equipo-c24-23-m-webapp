import { Test, TestingModule } from '@nestjs/testing';
import { RestauranteService } from './restaurante.service';

describe('RestauranteService', () => {
  let service: RestauranteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RestauranteService],
    }).compile();

    service = module.get<RestauranteService>(RestauranteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
