import { Test, TestingModule } from '@nestjs/testing';
import { RepartidoresController } from './repartidores.controller';
import { RepartidoresService } from './repartidores.service';

describe('RepartidoresController', () => {
  let controller: RepartidoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RepartidoresController],
      providers: [RepartidoresService],
    }).compile();

    controller = module.get<RepartidoresController>(RepartidoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
