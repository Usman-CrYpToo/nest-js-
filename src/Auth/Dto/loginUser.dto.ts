import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class loginUserDto {
    @IsString()
    @IsNotEmpty()
    username : string;
    
    @IsString()
    @IsNotEmpty()
    password: string;

}