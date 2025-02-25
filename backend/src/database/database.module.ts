import { Module, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        try {
          const uri = `mongodb://${configService.getOrThrow<string>(
            'MONGO_INITDB_ROOT_USERNAME',
          )}:${configService.getOrThrow<string>(
            'MONGO_INITDB_ROOT_PASSWORD',
          )}@${configService.getOrThrow<string>('MONGO_HOST')}:${configService.getOrThrow<string>('MONGO_PORT')}/${configService.getOrThrow<string>('MONGO_INITDB_DATABASE')}?authSource=admin`;

          Logger.log('✅ Conexión a MongoDB exitosa.', 'DatabaseModule');
          return { uri };
        } catch (error) {
          Logger.error(
            '❌ Error al conectar con MongoDB:',
            error,
            'DatabaseModule',
          );
          throw error;
        }
      },
    }),
  ],
})
export class DatabaseModule {}
