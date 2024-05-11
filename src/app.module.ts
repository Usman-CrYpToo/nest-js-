import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose"
import { userModule } from './User/user.module';
import { emailModule } from './Email/email.module';
import { authModule } from './Auth/auth.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/user'), userModule, emailModule,authModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
