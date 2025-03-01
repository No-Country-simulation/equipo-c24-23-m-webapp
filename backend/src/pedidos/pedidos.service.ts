import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Pedido, DetallePedido } from './schema';
import { Model } from 'mongoose';
import { Direccion, User } from 'src/users/schema';
import { Producto } from 'src/productos/schema/producto.schema';
import { EstadoPedido } from './enum';

@Injectable()
export class PedidosService {
  constructor(
    @InjectModel(Pedido.name) private pedidoModel: Model<Pedido>,
    @InjectModel(DetallePedido.name)
    private detallePedidoModel: Model<DetallePedido>,
    @InjectModel(Direccion.name) private direccionModel: Model<Direccion>,
    @InjectModel(Producto.name) private productoModel: Model<Producto>,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  async create(createPedidoDto: CreatePedidoDto) {
    try {
      const direccion = await this.obtenerDireccion(createPedidoDto.cliente_id);
      const producto = await this.obtenerProducto(
        createPedidoDto.producto.producto_id,
      );

      const pedido = {
        restaurante_id: createPedidoDto.restaurante_id,
        cliente_id: createPedidoDto.cliente_id,
        direccion_id: direccion._id,
        estado: EstadoPedido.PENDIENTE,
        total: producto.precio * createPedidoDto.producto.cantidad,
        fecha: new Date(),
      };
      const pedidoCreado = await this.pedidoModel.create(pedido);

      const detallePedido = {
        pedido_id: pedidoCreado._id,
        producto_id: producto._id,
        cantidad: createPedidoDto.producto.cantidad,
        precio_unitario: producto.precio,
        subtotal: producto.precio * createPedidoDto.producto.cantidad,
      };
      const detallePedidoCreado =
        await this.detallePedidoModel.create(detallePedido);

      return [pedidoCreado, detallePedidoCreado];
    } catch (error) {
      throw new Error('Error al crear el pedido: ' + error.message);
    }
  }

  async findAll() {
    try {
      return await this.pedidoModel.find().exec();
    } catch (error) {}
  }

  async findOne(id: string) {
    try {
      const pedido = await this.pedidoModel.findById(id).exec();
      if (!pedido) {
        throw new NotFoundException(`Pedido con ID ${id} no encontrado`);
      }
      return pedido;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new Error('Error al obtener el pedido: ' + error.message);
    }
  }

  async update(id: string, updatePedidoDto: UpdatePedidoDto) {
    try {
      const pedidoActualizado = await this.pedidoModel.findByIdAndUpdate(id, updatePedidoDto, { new: true }).exec();
      if (!pedidoActualizado) {
        throw new NotFoundException(`Pedido con ID ${id} no encontrado`);
      }
      return pedidoActualizado;
    } catch (error) {
      if(error instanceof NotFoundException)
        throw error;
      throw new Error('Error al actualizar el pedido: ' + error.message);
    }
  }

  async remove(id: string) {
    try{
      const pedidoEliminado = await this.pedidoModel.findByIdAndUpdate(id, {estado: EstadoPedido.CANCELADO}, { new: true }).exec();
      if(!pedidoEliminado)
        throw new NotFoundException(`Pedido con ID ${id} no encontrado`);
      return pedidoEliminado;
    }catch(error){
      if(error instanceof NotFoundException)
        throw error;
    }
  }

  async obtenerDireccion(clienteId: string): Promise<Direccion> {
    const cliente = await this.userModel.findById(clienteId).exec();

    if(!cliente)
      throw new NotFoundException(`Cliente con ID ${clienteId} no encontrado`);

    const direccion = await this.direccionModel
      .findById(cliente.direccion)
      .exec();

    if (!direccion) {
      throw new NotFoundException(
        `Dirección para el cliente ${clienteId} no encontrada`,
      );
    }
    return direccion;
  }

  async obtenerProducto(productoId: string): Promise<Producto> {
    const producto = await this.productoModel.findById(productoId).exec();
    if (!producto) {
      throw new NotFoundException(
        `Producto con ID ${productoId} no encontrado`,
      );
    }
    return producto;
  }
}
