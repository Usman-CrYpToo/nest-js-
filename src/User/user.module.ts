import { Module } from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import { user, userSchema } from "./Model/user.schema";
import { userController } from "./Controller/user.controller";
import { userService } from "./Service/user.service";
import { authModule } from "src/Auth/auth.module";

@Module({
     imports: [MongooseModule.forFeature([{name : user.name, schema : userSchema}]),authModule],
     controllers : [userController],
     providers : [userService],
     exports : [userService]
})

export class userModule {}