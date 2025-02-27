import { Module } from '@nestjs/common';
import { RepartidoresService } from './repartidores.service';
import { RepartidoresController } from './repartidores.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Repartidor, RepartidorSchema } from './schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Repartidor.name, schema: RepartidorSchema }])],
  controllers: [RepartidoresController],
  providers: [RepartidoresService],
})
export class RepartidoresModule {}
