import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import { HttpExceptionFilter } from './common/expctions/http-exception.filter';

async function bootstrap() {
  const logger = new Logger('Boostrap');

  const app = await NestFactory.create(AppModule, { cors: true });

  app.use(
    helmet({
      crossOriginResourcePolicy: false,
    }),
  );
  app.setGlobalPrefix('api');
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: false,
    }),
  );

  logger.log('');
  logger.log(`🚀 App running on port ${process.env.PORT}`);
  logger.log(
    `🌍 API available at ${process.env.HOST_API || 'http://localhost:' + process.env.PORT}`,
  );
}

bootstrap();
