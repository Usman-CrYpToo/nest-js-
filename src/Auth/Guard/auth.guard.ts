import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Request } from "express";
import { Observable } from "rxjs";


@Injectable()
export class AutheticatedGuard implements CanActivate {
     canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
         const req:Request = context.switchToHttp().getRequest();
         return req.isAuthenticated();
     }
}

