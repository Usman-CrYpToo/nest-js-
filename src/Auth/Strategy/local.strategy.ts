import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { authService } from "../Service/auth.service";

@Injectable()
export class localStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: authService) {
         super();
    }

    async validate(username: string, password: string) {
         console.log("In", username, password);
        const get = await this.authService.verifyLoginUser({username, password})
         return get;
    }
}