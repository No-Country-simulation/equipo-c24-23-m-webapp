import {
  IsArray,
  IsNotEmpty,
  IsObject,
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

  @IsObject()
  @ValidateNested({ each: true })
  @Type(() => ProductoDto)
  producto: ProductoDto;
}
