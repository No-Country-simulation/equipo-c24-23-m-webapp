import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRestauranteDto } from './dto';
import { UpdateRestauranteDto } from './dto';
import { Restaurante } from './schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class RestauranteService {
  constructor(
    @InjectModel(Restaurante.name) private restauranteModel: Model<Restaurante>,
  ) {}

  async create(
    createRestauranteDto: CreateRestauranteDto,
  ): Promise<Restaurante> {
    try {
      return await this.restauranteModel.create(createRestauranteDto);
    } catch (error) {
      throw new Error('Error al crear restaurante: ' + error.message);
    }
  }

  async findAll(): Promise<Restaurante[]> {
    try {
      return await this.restauranteModel.find().populate('usuario_id').exec();
    } catch (error) {
      throw new Error('Error al obtener los restaurantes: ' + error.message);
    }
  }

  async findOne(id: string): Promise<Restaurante> {
    try {
      const restaurante = await this.restauranteModel
        .findById(id)
        .populate('usuario_id')
        .exec();
      if (!restaurante) {
        throw new NotFoundException(`Restaurante con ID ${id} no encontrado`);
      }
      return restaurante;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new Error('Error al obtener usuario: ' + error.message);
    }
  }

  async update(
    id: string,
    updateRestauranteDto: UpdateRestauranteDto,
  ): Promise<Restaurante> {
    try {
      const restauranteActualizado = await this.restauranteModel
        .findByIdAndUpdate(id, updateRestauranteDto, { new: true })
        .exec();
      if (!restauranteActualizado) {
        throw new NotFoundException(`Restaurante con ID ${id} no encontrado`);
      }
      return restauranteActualizado;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new Error('Error al obtener usuario: ' + error.message);
    }
  }

  async remove(id: string): Promise<Restaurante> {
    try {
      const restaurante = await this.restauranteModel.findByIdAndDelete(id);
      if (!restaurante) {
        throw new NotFoundException(`Restaurante con ID ${id} no encontrado`);
      }
      return restaurante;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new Error('Error al obtener usuario: ' + error.message);
    }
  }
}
