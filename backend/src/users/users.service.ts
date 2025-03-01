import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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

  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const usuarioExistente = await this.findByEmail(createUserDto.email);
      if (usuarioExistente) {
        throw new ConflictException(
          `Existe un usuario con el email ${createUserDto.email} `,
        );
      }
      const direccionCreada = await this.direccionModel.create(
        createUserDto.direccion,
      );
      const usuarioCreado = new this.userModel({
        ...createUserDto,
        direccion: direccionCreada._id,
        estado: true,
      });
      return (await this.userModel.create(usuarioCreado)).populate('direccion');
    } catch (error) {
      if (error instanceof ConflictException) {
        throw error;
      }
      throw new Error('Error al crear usuario: ' + error.message);
    }
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().populate('direccion').exec();
  }

  async findOne(id: string): Promise<User> {
    try {
      const user = await this.userModel
        .findById(id)
        .populate('direccion')
        .exec();
      if (!user) {
        throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
      }
      return user;
    } catch (error) {
      throw new Error('Error al buscar usuario: ' + error.message);
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    try {
      const user = await this.userModel.findById(id).exec();

      if (!user) {
        throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
      }

      if (!updateUserDto.direccion) {
        return this.userModel
          .findByIdAndUpdate(id, updateUserDto, { new: true })
          .populate('direccion')
          .exec();
      } else {
        const direccionActualizada = await this.direccionModel
          .findByIdAndUpdate(user.direccion, updateUserDto.direccion)
          .exec();

        const usuarioActualizado = await this.userModel
          .findByIdAndUpdate(
            id,
            { ...updateUserDto, direccion: direccionActualizada._id },
            { new: true },
          )
          .populate('direccion')
          .exec();

        return usuarioActualizado;
      }
    } catch (error) {
      throw new Error('Error al actualizar usuario: ' + error.message);
    }
  }

  async remove(id: string): Promise<User> {
    try {
      const usuarioEliminado = await this.userModel
        .findByIdAndUpdate(id, { estado: false }, { new: true })
        .exec();
      if (!usuarioEliminado) {
        throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
      }
      return usuarioEliminado;
    } catch (error) {
      throw new Error('Error al eliminar usuario: ' + error.message);
    }
  }

  async findByEmail(email: string): Promise<User> {
    try {
      return this.userModel.findOne({ email }).exec();
    } catch (error) {
      throw new Error('Error al buscar usuario: ' + error.message);
    }
  }
}
