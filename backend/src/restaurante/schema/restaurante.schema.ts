import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";

@Schema()
export class Restaurante extends Document{
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    usuario_id: string;

    @Prop({ required: true })
    nombre_restaurante: string;

    @Prop({ required: true })
    horario_apertura: string;

    @Prop({ required: true })
    horario_cierre: string;
}

export const RestauranteSchema = SchemaFactory.createForClass(Restaurante);