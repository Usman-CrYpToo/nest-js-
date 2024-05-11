import { Module } from "@nestjs/common";
import { emailModule } from "src/Email/email.module";
import { authService } from "./Service/auth.service";
import { JwtModule } from "@nestjs/jwt";
import { authController } from "./Controller/auth.controller";
import { LocalJwtStrategy } from "./Strategy/jwt.strategy";
import { MongooseModule } from "@nestjs/mongoose";
import { user, userSchema } from "src/User/Model/user.schema";
import { localStrategy } from "./Strategy/local.strategy";
import { sessionSerialization } from "./serialization/session.serializer";
import { PassportModule } from "@nestjs/passport";

@Module({
    imports: [emailModule, JwtModule.register({
        secret : "usman123", 
        signOptions: {expiresIn : "1h"}
    }), MongooseModule.forFeature([{name : user.name, schema : userSchema}]), PassportModule, PassportModule.register({session: true})],
    controllers : [authController],
    providers: [authService, LocalJwtStrategy, localStrategy, sessionSerialization],
    exports: [authService]
})
export class authModule {}