import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNotEmptyObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateDireccionDto } from './create-direccion.dto';
import { TipoUsuario } from '../enum/tipo-usuario.enum';
import { Type } from 'class-transformer';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  contraseña: string;

  @IsEnum(TipoUsuario)
  @IsNotEmpty()
  tipo_usuario: TipoUsuario;

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => CreateDireccionDto)
  direccion: CreateDireccionDto;
}
