import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { EstadoPedido } from "../enum";

@Schema()
export class Pedido extends Document {
    @Prop({required: true})
    restaurante_id: string;

    @Prop({required: true})
    cliente_id: string;

    @Prop()
    direccion_id: string;

    @Prop({required: true})
    estado: EstadoPedido;

    @Prop({required: true})
    total: number;

    @Prop({required: true})
    fecha: Date;
}

export const PedidoSchema = SchemaFactory.createForClass(Pedido);