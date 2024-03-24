import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const createSwaggerConfig = (
  title: string,
  description: string,
  version: string,
  prefix: string = 'api',
) => {
  const config = new DocumentBuilder()
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      'JWT-auth',
    )
    .setTitle(title)
    .setDescription(description)
    .setVersion(version)
    .build();

  return (app: INestApplication) => {
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup(prefix, app, document);
  };
};