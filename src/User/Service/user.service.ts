import { Injectable } from "@nestjs/common"
import {InjectModel} from "@nestjs/mongoose"
import { Model } from "mongoose"
import { user } from "../Model/user.schema"
import { authService } from "src/Auth/Service/auth.service";
import * as bcrypt from 'bcrypt';

@Injectable() 
export class userService {
    constructor(@InjectModel(user.name) private _userSchema : Model<user>,
    private authservice: authService
    ) {}

   async createUser(userData : createUserType) {
        const {password, isdriver,...result}  = userData;
        this.authservice.sendVerificationEmail(result);
        const findUser =await this._userSchema.findOne({username : userData.username,email : userData.email})
        
        if(!findUser) {
            userData.isverified = false;
            userData.password = await bcrypt.hash(password, 10)
            return this._userSchema.create(userData);   
        } else {
            return findUser;
        }
    }


}