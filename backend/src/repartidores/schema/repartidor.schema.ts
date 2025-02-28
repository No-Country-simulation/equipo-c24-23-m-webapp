import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Vehiculo } from "../enum";

@Schema()
export class Repartidor extends Document{
    @Prop({ required: true })
    usuario_id: string;

    @Prop({ required: true })
    vehiculo: Vehiculo;

    @Prop({ required: true })
    disponible: boolean;
}

export const RepartidorSchema = SchemaFactory.createForClass(Repartidor);