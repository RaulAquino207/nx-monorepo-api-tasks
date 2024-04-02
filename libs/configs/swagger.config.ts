import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';

export const createSwaggerConfig = (
  title: string,
  description: string,
  version: string,
  prefix: string = 'api'
) => {
  const config = new DocumentBuilder()
    .setTitle(title)
    .setDescription(description)
    .setVersion(version)
    .addSecurity('JWT-auth', {
      type: 'http',
      scheme: 'bearer',
      name: 'JWT',
      in: 'header',
      description: 'Enter JWT token',
    })
    .addSecurityRequirements('JWT-auth')
    .build();

  return (app: INestApplication) => {
    const document = SwaggerModule.createDocument(app, config);

    Object.values((document as OpenAPIObject).paths).forEach((path: any) => {
      Object.values(path).forEach((method: any) => {
        if (
          Array.isArray(method.security) &&
          method.security.includes('isPublic') &&
          !method.security.includes('isRefresh')
        ) {
          method.security = [];
        } else {
          method.security = undefined;
        }
      });
    });

    SwaggerModule.setup(prefix, app, document);
  };
};
