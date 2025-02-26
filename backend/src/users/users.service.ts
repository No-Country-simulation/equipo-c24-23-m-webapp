import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto';
import { UpdateUserDto } from './dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema';
import { Model } from 'mongoose';
import { Direccion } from './schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(Direccion.name) private direccionModel: Model<Direccion>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const direccionCreada = await this.direccionModel.create(
        createUserDto.direccion,
      );
      const usuarioCreado = new this.userModel({
        ...createUserDto,
        direccion: direccionCreada._id,
        estado: true,
      });
      return await usuarioCreado.save();
    } catch (error) {
      throw new Error('Error al crear usuario: ' + error.message);
    }
  }

  async findAll() {
    return this.userModel.find();
  }

  async findOne(id: string) {
    try {
      const user = await this.userModel.findById(id).populate('direccion');
      if (!user) {
        throw new NotFoundException('Usuario no encontrado');
      }
      return user;
    } catch (error) {
      throw new Error('Error al buscar usuario: ' + error.message);
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    try{
      const user = await this.userModel.findById(id);
      if (!user) {
        throw new NotFoundException('Usuario no encontrado');
      }
      if (!updateUserDto.direccion){
        return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).populate('direccion');
      }else{
        const direccionActualizada = await this.direccionModel.findByIdAndUpdate(
          user.direccion,
          updateUserDto.direccion
        );
        const usuarioActualizado = await this.userModel.findByIdAndUpdate(
          id,
          { ...updateUserDto, direccion: direccionActualizada._id },
          { new: true }
        ).populate('direccion');
        return [usuarioActualizado];
      }
    }catch(error){
      throw new Error('Error al actualizar usuario: ' + error.message);
    }
  }

  async remove(id: string) {
    try{
      await this.findOne(id);
      return this.userModel.findByIdAndUpdate(id, { estado: false }, { new: true });
    }catch(error){
      throw new Error('Error al eliminar usuario: ' + error.message);
    }
  }
}
