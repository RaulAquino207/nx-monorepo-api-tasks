import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
    @IsOptional()
    @IsEmail()
    @ApiProperty({
        example: 'example@email.com',
        description: '',
        required: false,
    })
    email: string;

    @IsOptional()
    @IsString()
    @ApiProperty({
        example: 'Joe',
        description: '',
        required: false,
    })
    first_name: string;

    @IsOptional()
    @IsString()
    @ApiProperty({
        example: 'Doe',
        description: '',
        required: false,
    })
    last_name: string;

    @IsOptional()
    @IsString()
    @ApiProperty({
        example: '123456',
        description: '',
        required: true,
    })
    password: string;
}
