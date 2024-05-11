import { IsBoolean, IsEmail, IsNotEmpty, IsString } from "class-validator";
export class createUserDto {
     @IsString()
     @IsNotEmpty()
     username : string;

     @IsString()
     @IsNotEmpty()
     @IsEmail()
     email : string;

     @IsString()
     @IsNotEmpty()
     password : string;
     
     @IsBoolean()
     @IsNotEmpty()
     isdriver : boolean;
  
}