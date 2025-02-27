import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRestauranteDto } from './dto/create-restaurante.dto';
import { UpdateRestauranteDto } from './dto/update-restaurante.dto';
import { Restaurante } from './schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { error } from 'console';

@Injectable()
export class RestauranteService {
  constructor(@InjectModel(Restaurante.name) private restauranteModel: Model<Restaurante>) {}

  async create(createRestauranteDto: CreateRestauranteDto) {
    try{
      return await this.restauranteModel.create(createRestauranteDto);
    }catch(error){
      throw new Error('Error al crear restaurante: ' + error.message);
    }
  }


  async findAll() {
    try{
      return await this.restauranteModel.find();
    }catch(error){
      throw new Error('Error al obtener los restaurantes: ' + error.message);
    }
  }

  async findOne(id: string) {
    try{
      const restaurante = await this.restauranteModel.findById(id);
      if(!restaurante){
        throw new NotFoundException('Restaurante no encontrado');
      }
      return restaurante;
    }catch(error){
      throw new Error('Error al obtener usuario: ' + error.message);
    }
  }

  async update(id: string, updateRestauranteDto: UpdateRestauranteDto) {
    try{
      await this.findOne(id);
      
      return await this.restauranteModel.findByIdAndUpdate(id, updateRestauranteDto, { new: true });
    }catch(error){
      throw new Error('Error al actualizar restaurante: ' + error.message);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} restaurante`;
  }
}
