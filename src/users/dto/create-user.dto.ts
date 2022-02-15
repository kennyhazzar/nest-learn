import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

    @ApiProperty({ example: 'email@company.com', description: 'Электронная почта пользователя' })
    readonly email: string;
    
    @ApiProperty({ example: '@#$%^&*(QWERTYU', description: 'Пароль пользователя' })
    readonly password: string;
}