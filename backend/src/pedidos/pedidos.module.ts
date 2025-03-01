import { Module } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { PedidosController } from './pedidos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  DetallePedido,
  DetallePedidoSchema,
  Pedido,
  PedidoSchema,
} from './schema';
import { UsersModule } from 'src/users/users.module';
import { ProductosModule } from 'src/productos/productos.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Pedido.name, schema: PedidoSchema },
      { name: DetallePedido.name, schema: DetallePedidoSchema },
    ]),
    UsersModule,
    ProductosModule
  ],
  controllers: [PedidosController],
  providers: [PedidosService],
})
export class PedidosModule {}
