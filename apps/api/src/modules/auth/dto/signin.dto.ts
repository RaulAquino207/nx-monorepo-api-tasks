import { ApiProperty } from '@nestjs/swagger';
import { Match } from 'apps/api/src/decorators/match.decorator';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class SigninDto {
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    example: 'example@email.com',
    description: '',
    required: true,
  })
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: '123456',
    description: '',
    required: true,
  })
  password: string;
}
