import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller()
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @MessagePattern('createUsuario')
  create(@Payload() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto);
  }

  @MessagePattern('findAllUsuarios')
  findAll() {
    return this.usuariosService.findAll();
  }

  @MessagePattern('findOneUsuario')
  findOne(@Payload() id: number) {
    return this.usuariosService.findOne(id);
  }

  @MessagePattern('updateUsuario')
  update(@Payload() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.update(updateUsuarioDto.id, updateUsuarioDto);
  }

  @MessagePattern('removeUsuario')
  remove(@Payload() id: number) {
    return this.usuariosService.remove(id);
  }
}
