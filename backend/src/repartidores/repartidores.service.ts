import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRepartidorDto } from './dto';
import { UpdateRepartidorDto } from './dto';
import { InjectModel } from '@nestjs/mongoose';
import { Repartidor } from './schema';
import { Model } from 'mongoose';

@Injectable()
export class RepartidoresService {
  constructor(
    @InjectModel(Repartidor.name) private repartidorModel: Model<Repartidor>,
  ) {}
  async create(createRepartidoreDto: CreateRepartidorDto): Promise<Repartidor> {
    try {
      return await this.repartidorModel.create(createRepartidoreDto);
    } catch (error) {
      throw new Error('Error al crear repartidor: ' + error.message);
    }
  }

  async findAll(): Promise<Repartidor[]> {
    try {
      return await this.repartidorModel.find().exec();
    } catch (error) {
      throw new Error('Error al obtener los repartidores: ' + error.message);
    }
  }

  async findOne(id: string): Promise<Repartidor> {
    try {
      const restaurante = await this.repartidorModel.findById(id).exec();
      if (!restaurante) {
        throw new NotFoundException(`Restaurante con ID ${id} no encontrado`);
      }
      return restaurante;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new Error('Error al obtener el repartidor: ' + error.message);
    }
  }

  async update(id: string, updateRepartidoreDto: UpdateRepartidorDto): Promise<Repartidor> {
    try {
      const repartidor = await this.repartidorModel
        .findByIdAndUpdate(id, updateRepartidoreDto, { new: true })
        .exec();
      if (!repartidor) {
        throw new NotFoundException(`Repartidor con ID ${id} no encontrado`);
      }
      return repartidor;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new Error('Error al actualizar el repartidor: ' + error.message);
    }
  }

  async remove(id: string): Promise<Repartidor> {
    try {
      const repartidorEliminado = await this.repartidorModel.findByIdAndDelete(id).exec();
      if(!repartidorEliminado){
        throw new NotFoundException(`Repartidor con ID ${id} no encontrado`);
      }
      return repartidorEliminado;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new Error('Error al eliminar el repartidor: ' + error.message);
    }
  }
}
