import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { createSwaggerConfig } from '../../../libs/configs/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT_API || 3000;

  if (process.env.NODE_ENV == 'development') {
    const runSwagger = createSwaggerConfig(
      process.env.TITLE,
      process.env.DESCRIPTION,
      process.env.VERSION
    );
    Logger.log(
      `📚 Documentation available at http://localhost:${process.env.PORT_API}/${globalPrefix}`
    );
    runSwagger(app);
  }

  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
