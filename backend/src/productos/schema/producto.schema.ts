import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Producto extends Document{
    @Prop({required: true})
    restaurante_id: string;

    @Prop({required: true})
    nombre: string;

    @Prop({required: true})
    precio: number;

    @Prop({required: true})
    descripcion: string;

    @Prop({required: true})
    disponible: boolean;
}

export const ProductoSchema = SchemaFactory.createForClass(Producto);