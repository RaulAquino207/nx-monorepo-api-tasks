import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';

export const createSwaggerConfig = (
  title: string,
  description: string,
  version: string,
  prefix: string = 'api'
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
      'JWT-auth'
    )
    .addSecurity('bearer', {
      type: 'apiKey',
      in: 'header',
      name: 'Authorization',
    })
    .addSecurityRequirements('bearer')
    .setTitle(title)
    .setDescription(description)
    .setVersion(version)
    .build();

  return (app: INestApplication) => {
    const document = SwaggerModule.createDocument(app, config);

    Object.values((document as OpenAPIObject).paths).forEach((path: any) => {
      Object.values(path).forEach((method: any) => {
        if (
          Array.isArray(method.security) &&
          method.security.includes('isPublic')
        ) {
          method.security = [];
        }
      });
    });

    SwaggerModule.setup(prefix, app, document);
  };
};
