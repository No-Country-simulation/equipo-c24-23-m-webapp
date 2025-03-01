import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Pedido, DetallePedido } from './schema';
import { Model } from 'mongoose';
import { Direccion } from 'src/users/schema';
import { Producto } from 'src/productos/schema/producto.schema';

@Injectable()
export class PedidosService {
  constructor(
    @InjectModel(Pedido.name) private pedidoModel: Model<Pedido>,
    @InjectModel(DetallePedido.name)
    private detallePedidoModel: Model<DetallePedido>,
    @InjectModel(Direccion.name) private direccionModel: Model<Direccion>,
    @InjectModel(Producto.name) private productoModel: Model<Producto>,
  ) {}

  async create(createPedidoDto: CreatePedidoDto) {
    try {
      return await this.createPedido(createPedidoDto);
    } catch (error) {
      throw new Error('Error al crear el pedido: ' + error.message);
    }
  }

  findAll() {
    return `This action returns all pedidos`;
  }

  findOne(id: string) {
    return `This action returns a #${id} pedido`;
  }

  update(id: string, updatePedidoDto: UpdatePedidoDto) {
    return `This action updates a #${id} pedido`;
  }

  remove(id: string) {
    return `This action removes a #${id} pedido`;
  }

  async createPedido(createPedidoDto: CreatePedidoDto) {
    const direccion = await this.obtenerDireccion(createPedidoDto.cliente_id);
    const detallesPedido = await this.generarDetallesPedido(createPedidoDto);
    const total = this.calcularTotal(detallesPedido);

    const pedido = await this.pedidoModel.create({
      restaurante_id: createPedidoDto.restaurante_id,
      cliente_id: createPedidoDto.cliente_id,
      direccion_id: direccion._id,
      estado: 'PENDIENTE',
      total,
      fecha: new Date(),
    });

    await this.crearDetallesPedido(pedido._id.toString(), detallesPedido);

    return pedido;
  }

  async obtenerDireccion(clienteId: string) {
    const direccion = await this.direccionModel.findOne({ usuario_id: clienteId }).exec();
    if (!direccion) {
      throw new NotFoundException(`Dirección para el cliente ${clienteId} no encontrada`);
    }
    return direccion;
  }

  async generarDetallesPedido(createPedidoDto: CreatePedidoDto) {
    const productosIds = createPedidoDto.productos.map(p => p.producto_id);
    const productos = await this.productoModel.find({ _id: { $in: productosIds } }).exec();
    const productosMap = new Map(productos.map(p => [p._id.toString(), p]));

    return createPedidoDto.productos.map(({ producto_id, cantidad }) => {
      const producto = productosMap.get(producto_id);
      if (!producto) {
        throw new NotFoundException(`Producto con ID ${producto_id} no encontrado`);
      }

      return {
        pedido_id: null,
        producto_id,
        cantidad,
        precio_unitario: producto.precio,
        total: producto.precio * cantidad,
      };
    });
  }

  calcularTotal(detallesPedido: any[]) {
    return detallesPedido.reduce((acc, detalle) => acc + detalle.total, 0);
  }

  async crearDetallesPedido(pedidoId: string, detallesPedido: any[]) {
    detallesPedido.forEach(detalle => (detalle.pedido_id = pedidoId));
    await this.detallePedidoModel.insertMany(detallesPedido);
  }
}
