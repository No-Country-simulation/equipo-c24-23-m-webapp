import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ProductoDto{
    @IsString()
    @IsNotEmpty()
    producto_id: string

    @IsNumber()
    @IsNotEmpty()
    cantidad: number
}