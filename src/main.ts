import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;

  app.enableCors();
  app.use(bodyParser.json({ limit: '50mb' }));
  await app.listen(port);
}
bootstrap();
