import { Module } from '@nestjs/common';
import { RestauranteService } from './restaurante.service';
import { RestauranteController } from './restaurante.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Restaurante, RestauranteSchema } from './schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Restaurante.name, schema: RestauranteSchema }])],
  controllers: [RestauranteController],
  providers: [RestauranteService],
})
export class RestauranteModule {}
