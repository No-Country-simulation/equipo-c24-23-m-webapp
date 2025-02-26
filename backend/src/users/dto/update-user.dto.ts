import { IsEmail, IsEnum, IsOptional, IsString, ValidateNested } from "class-validator";
import { TipoUsuario } from "../enum/tipo-usuario.enum";
import { UpdateDireccionDto } from "./update-direccion.dto";
import { Type } from "class-transformer";

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  nombre?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  contraseña?: string;

  @IsOptional()
  @IsEnum(TipoUsuario)
  tipo_usuario?: TipoUsuario;

  @IsOptional()
  @ValidateNested()
  @Type(() => UpdateDireccionDto)
  direccion?: UpdateDireccionDto;
}
