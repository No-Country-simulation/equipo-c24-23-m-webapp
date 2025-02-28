import { Test, TestingModule } from '@nestjs/testing';
import { RestauranteController } from './restaurante.controller';
import { RestauranteService } from './restaurante.service';

describe('RestauranteController', () => {
  let controller: RestauranteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RestauranteController],
      providers: [RestauranteService],
    }).compile();

    controller = module.get<RestauranteController>(RestauranteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
