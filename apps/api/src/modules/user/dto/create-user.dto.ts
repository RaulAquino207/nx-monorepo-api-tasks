import { ApiProperty } from '@nestjs/swagger';
import { Match } from 'apps/api/src/decorators/match.decorator';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    @IsEmail()
    @ApiProperty({
        example: 'example@email.com',
        description: '',
        required: true,
    })
    email: string;

    @IsString()
    @ApiProperty({
        example: 'Joe',
        description: '',
        required: false,
    })
    first_name: string;

    @IsString()
    @ApiProperty({
        example: 'Doe',
        description: '',
        required: false,
    })
    last_name: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        example: '123456',
        description: '',
        required: true,
    })
    password: string;

    @Match(CreateUserDto, (u) => u.password, {
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
