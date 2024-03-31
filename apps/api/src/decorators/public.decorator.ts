import { SetMetadata, applyDecorators } from '@nestjs/common';

const PublicAuthMiddleware = SetMetadata('isPublic', true);
const PublicAuthSwagger = SetMetadata('swagger/apiSecurity', ['isPublic']);

export const Public = () =>
  applyDecorators(PublicAuthMiddleware, PublicAuthSwagger);
