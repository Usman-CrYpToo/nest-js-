import { Injectable } from "@nestjs/common";
import {PassportStrategy} from "@nestjs/passport"
import {Strategy, ExtractJwt} from "passport-jwt"
import { payload } from "../Dto/verifyUser.dto";
import { authService } from "../Service/auth.service";

@Injectable() 
export class LocalJwtStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: authService) {
         super({
            jwtFromRequest: ExtractJwt.fromUrlQueryParameter("token"),
            ignoreExpiration: false,
            secretOrKey: "usman123",
         })
    }

    async validate(payload: payload) {
        console.log("in strategy :: ",payload);
         return await this.authService.verifyingUser(payload);
    }
}