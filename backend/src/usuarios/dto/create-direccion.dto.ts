import { IsInt, IsNotEmpty, IsString, Min } from "class-validator";

export class CreateDireccionDto {
    @IsString()
    @IsNotEmpty()
    calle: string;

    @IsNotEmpty()
    @IsInt()
    @Min(1)
    numero: number;

    @IsString()
    @IsNotEmpty()
    ciudad: string;

    @IsNotEmpty()
    @IsInt()
    @Min(1)
    codigo_postal: number;
}