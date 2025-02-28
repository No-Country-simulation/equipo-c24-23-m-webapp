import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRestauranteDto {
  @IsString()
  @IsNotEmpty()
  usuario_id: string;

  @IsString()
  @IsNotEmpty()
  nombre_restaurante: string;

  @IsString()
  @IsNotEmpty()
  horario_apertura: string;

  @IsString()
  @IsNotEmpty()
  horario_cierre: string;
}
