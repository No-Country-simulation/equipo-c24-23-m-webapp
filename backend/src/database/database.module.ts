import { Module, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const uri = configService.getOrThrow<string>('MONGO_URI');
        Logger.log('✅ Conectado a MongoDB Atlas.', 'DatabaseModule');
        return { uri };
      },
    }),
  ],
})
export class DatabaseModule {}
