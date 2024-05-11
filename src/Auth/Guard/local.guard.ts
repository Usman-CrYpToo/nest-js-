import { ExecutionContext } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Request } from "express";


export class LocalLoginGuard extends AuthGuard('local') {
   async canActivate(context: ExecutionContext) {
    const result = (await super.canActivate(context)) as boolean;
    const req:Request = context.switchToHttp().getRequest();
     await super.logIn(req);
     return  result;
    }
}