import { PartialType } from '@nestjs/mapped-types';
import { CreateProductoDto } from './create-producto.dto';
import { IsBoolean } from 'class-validator';

export class UpdateProductoDto extends PartialType(CreateProductoDto) {
    @IsBoolean()
    disponible?: boolean
}
