import { IsEmail, IsNotEmpty, IsString } from "class-validator";
export class authForSendEmail {
     @IsString()
     @IsNotEmpty()
     username : string;

     @IsString()
     @IsNotEmpty()
     @IsEmail()
     email : string;

}