import { SetMetadata, applyDecorators } from '@nestjs/common';

export const Public = () => {
  const metadata = [
    SetMetadata('isPublic', true),
    SetMetadata('swagger/apiSecurity', ['isPublic']),
  ];
  return applyDecorators(...metadata);
};
