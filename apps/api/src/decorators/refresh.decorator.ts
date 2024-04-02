import { SetMetadata, applyDecorators } from '@nestjs/common';

export const Refresh = () => {
  const metadata = [
    SetMetadata('isPublic', true),
    SetMetadata('swagger/apiSecurity', ['isPublic', 'isRefresh']),
  ];
  return applyDecorators(...metadata);
};
