import { PartialType } from '@nestjs/mapped-types';
import { CreatePedidoDto } from './create-pedido.dto';
import { IsEnum } from 'class-validator';
import { EstadoPedido } from '../enum';

export class UpdatePedidoDto extends PartialType(CreatePedidoDto) {
    @IsEnum(EstadoPedido)
    estado?: EstadoPedido;
}
