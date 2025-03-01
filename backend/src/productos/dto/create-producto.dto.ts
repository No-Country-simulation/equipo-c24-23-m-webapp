import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductoDto {
    @IsString()
    @IsNotEmpty()
    restaurante_id: string;

    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsNumber()
    @IsNotEmpty()
    precio: number;

    @IsString()
    @IsNotEmpty()
    descripcion: string;
}
