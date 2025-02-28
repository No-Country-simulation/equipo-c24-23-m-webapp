import { PartialType } from "@nestjs/mapped-types";
import { CreateDireccionDto } from "./create-direccion.dto";
import { IsOptional } from "class-validator";

export class UpdateDireccionDto extends PartialType(CreateDireccionDto) {
  @IsOptional()
  calle?: string;

  @IsOptional()
  numero?: number;

  @IsOptional()
  ciudad?: string;

  @IsOptional()
  codigo_postal?: number;
}
