import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { emailService } from "src/Email/Service/email.service";
import { authForSendEmail } from "../Dto/sendEmail.dto";
import { JwtService } from "@nestjs/jwt";
import { InjectModel } from "@nestjs/mongoose";
import { user } from "src/User/Model/user.schema";
import { Model } from "mongoose";
import { payload } from "../Dto/verifyUser.dto";
import { userLoginType } from "../Type/loginUser.type";
import * as bcrypt from 'bcrypt';

@Injectable()
export class authService {
    constructor(
        private jwtService : JwtService,
        private emailService: emailService,
        @InjectModel(user.name) private userModel: Model<user>
        ){}
    
    sendVerificationEmail(emailData: authForSendEmail) {
         const _jwt = this.jwtService.sign(emailData);
         const path = `http://localhost:3000/auth/verify?token=${_jwt}`;
         this.emailService.sendValidation({toEmail: emailData.email, verifyLink : path})
    }

   async verifyingUser(payload : payload) {
        const user = await this.userModel.findOne({username: payload.username ,email : payload.email})
        console.log("in service :: ",user);
        if(user && !user.isverified) {
             user.isverified = true;
           return await user.save();
        }
        else {
             throw new HttpException("user is already verified", HttpStatus.BAD_REQUEST)
        }
   }

   async verifyLoginUser(loginCredentials: userLoginType) {
    

       const {username} = loginCredentials
       const findUser = await this.userModel.findOne({username});
       const compare = await bcrypt.compare(loginCredentials.password, findUser.password);
       console.log(loginCredentials)
       console.log(findUser);
       console.log("in verifylogin ", compare)
       if(compare && findUser.isverified) {
            
           return true;
       }else {
           return false;
       }
   }
}