import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto';
import { UpdateUserDto } from './dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema';
import { Model } from 'mongoose';
import { Direccion } from './schema';
import { CreateDireccionDto } from './dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>, @InjectModel(Direccion.name) private direccionModel: Model<Direccion>) {}
  async create(createUserDto: CreateUserDto) {
    const direccion: CreateDireccionDto = createUserDto.direccion;
    const direccionCreada = await this.direccionModel.create(direccion);
    const user = { ...createUserDto, direccion: direccionCreada._id, estado: true};
    return this.userModel.create(user);
  }

  async findAll() {
    return this.userModel.find();
  }

  async findOne(id: string) {
    return this.userModel.findById(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(
      id, 
      updateUserDto,
      { new: true }
    );
  }

  async remove(id: string) {
    return this.userModel.findByIdAndUpdate(
      id,
      { estado: false },
      { new: true }
    );
  }
}
