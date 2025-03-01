import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Direccion } from './direccion.schema';
import { TipoUsuario } from '../enum/tipo-usuario.enum';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  contraseña: string;

  @Prop({ required: true })
  tipo_usuario: TipoUsuario;

  @Prop()
  estado: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Direccion' })
  direccion: Direccion;
}

export const UserSchema = SchemaFactory.createForClass(User);
