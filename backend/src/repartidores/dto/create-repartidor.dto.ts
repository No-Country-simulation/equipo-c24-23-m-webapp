import { IsBoolean, IsEnum, IsNotEmpty, IsString } from "class-validator";
import { Vehiculo } from "../enum";

export class CreateRepartidorDto {
    @IsString()
    @IsNotEmpty()
    usuario_id: string;
    
    @IsEnum(Vehiculo)
    @IsNotEmpty()
    vehiculo: Vehiculo;

    @IsBoolean()
    @IsNotEmpty()
    disponible: boolean;
}
