import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

@Schema()
export class Restaurante {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' })
    usuario_id: string;

    @Prop({ required: true })
    nombre_restaurante: string;

    @Prop({ required: true })
    horario_apertura: string;

    @Prop({ required: true })
    horario_cierre: string;
}

export const RestauranteSchema = SchemaFactory.createForClass(Restaurante);