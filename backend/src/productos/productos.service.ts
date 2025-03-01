import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Producto } from './schema/producto.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductosService {
  constructor(@InjectModel(Producto.name) private productoModel: Model<Producto>) {}

  async create(createProductoDto: CreateProductoDto): Promise<Producto>{
    try{
      const productoCreado = {disponible: true, ...createProductoDto}
      return await this.productoModel.create(productoCreado);
    }catch(error){
      throw new Error('Error al crear producto: ' + error.message);
    }
  }

  async findAll(): Promise<Producto[]> {
    try {
      return await this.productoModel.find().exec();
    } catch (error) {
      throw new Error('Error al obtener los productos: ' + error.message);
    }
  }

  async findOne(id: string): Promise<Producto> {
    try {
      const producto =  await this.productoModel.findById(id).exec();
      if(!producto){
        throw new NotFoundException(`Producto con ID ${id} no encontrado`);
      }
      return producto;
    } catch (error) {
      if (error instanceof NotFoundException) 
        throw error;
      throw new Error('Error al obtener el producto: ' + error.message);
    }
  }

  async update(id: string, updateProductoDto: UpdateProductoDto): Promise<Producto> {
    try{
      const productoActualizado = await this.productoModel
        .findByIdAndUpdate(id, updateProductoDto, { new: true })
        .exec();
      if(!productoActualizado){
        throw new NotFoundException(`Producto con ID ${id} no encontrado`);
      }
      return productoActualizado;
    }catch(error){
      if(error instanceof NotFoundException){
        throw error;
      }
      throw new Error('Error al actualizar el producto: ' + error.message);
    }
  }

  async remove(id: string): Promise<Producto>{
    try{
      const productoEliminado = await this.productoModel.findByIdAndUpdate(id, {disponible: false}, { new: true }).exec();
      if(!productoEliminado){
        throw new NotFoundException(`Producto con ID ${id} no encontrado`);
      }
      return productoEliminado;
    }catch(error){
      if(error instanceof NotFoundException){
        throw error;
      }
      throw new Error('Error al eliminar el producto: ' + error.message);
    }
  }
}
