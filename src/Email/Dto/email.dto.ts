import {IsEmail, IsJWT, IsNotEmpty, IsString} from "class-validator"
export class sendVerifyEmailDto {
     @IsString()
     @IsNotEmpty()
     @IsEmail()
     toEmail : string;

     @IsString()
     verifyLink : string;
}