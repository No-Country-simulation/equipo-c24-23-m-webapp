import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schema/user.schema';
import { Direccion, DireccionSchema } from './schema/direccion.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema}, {name: Direccion.name, schema: DireccionSchema}]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [MongooseModule],
})
export class UsersModule {}
