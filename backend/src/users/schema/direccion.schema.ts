import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Direccion extends Document{

    @Prop({ required: true })
    calle: string;

    @Prop({ required: true })
    numero: number;

    @Prop({ required: true })
    ciudad: string;

    @Prop({ required: true })
    codigo_postal: number
}

export const DireccionSchema = SchemaFactory.createForClass(Direccion);