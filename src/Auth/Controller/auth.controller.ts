import { Body, Controller, Get, Param, Query, Redirect, Req, UseGuards } from "@nestjs/common";
import { LocalJwtGuard } from "../Guard/jwt.guard";
import { Request } from "express";
import { LocalLoginGuard } from "../Guard/local.guard";
import { loginUserDto } from "../Dto/loginUser.dto";

@Controller("auth")
export class authController{
    @Get("verify")
    @UseGuards(LocalJwtGuard)
    verifyUser(@Req() req: Request,@Query("token") _token:string) {
       return req.user;
    }

}