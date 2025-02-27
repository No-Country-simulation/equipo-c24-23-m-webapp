import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { RestauranteModule } from './restaurante/restaurante.module';
import { RepartidoresModule } from './repartidores/repartidores.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    UsersModule,
    RestauranteModule,
    RepartidoresModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
