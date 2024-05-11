import { Body, Controller, Get, Post, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { userService } from "../Service/user.service";
import { createUserDto } from "../Dto/user.dto";
import { loginUserDto } from "../../Auth/Dto/loginUser.dto";
import { LocalLoginGuard } from "src/Auth/Guard/local.guard";
import { AutheticatedGuard } from "src/Auth/Guard/auth.guard";
@Controller()
export class userController {
    constructor(private userService : userService) {}

     @Post("register")
     @UsePipes(new ValidationPipe())
     register(@Body() userData : createUserDto) {
        return this.userService.createUser(userData);
     }

     @Get("login")
     @UseGuards(LocalLoginGuard)
     login(@Body() loginData: loginUserDto) {
          return true;
     }

     @Get('example')
     @UseGuards(AutheticatedGuard)
     check(){
       return "hello auth";
     }


}