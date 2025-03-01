import {
  IsArray,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';
import { ProductoDto } from './producto.dto';
import { Type } from 'class-transformer';

export class CreatePedidoDto {
  @IsString()
  @IsNotEmpty()
  restaurante_id: string;

  @IsString()
  @IsNotEmpty()
  cliente_id: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductoDto)
  productos: ProductoDto[];
}
