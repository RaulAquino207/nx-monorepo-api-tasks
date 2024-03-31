import { ApiProperty } from '@nestjs/swagger';
import { Match } from 'apps/api/src/decorators/match.decorator';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class AuthDto {
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

  @Match(AuthDto, (u) => u.password, {
    message: 'The passwords entered do not match.',
  })
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({
    example: '123456',
    description: '',
    required: false,
  })
  password_confirmation: string;
}
