import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class DetallePedido extends Document{
    @Prop({required: true})
    pedido_id: string;

    @Prop({required: true})
    producto_id: string;

    @Prop({required: true})
    cantidad: number;

    @Prop({required: true})
    precio_unitario: number;

    @Prop({required: true})
    subtotal: number;
}

export const DetallePedidoSchema = SchemaFactory.createForClass(DetallePedido);