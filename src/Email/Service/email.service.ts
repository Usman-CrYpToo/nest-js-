import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";
import { sendVerifyEmailDto } from "../Dto/email.dto";

@Injectable()
export class emailService{
    constructor(private _mailerService: MailerService) {}
     sendValidation(emailData:sendVerifyEmailDto) {
         return this._mailerService.sendMail({
            from : "udemyfree44@gmail.com",
            to : emailData.toEmail,
            subject : "Verification Email To Register",
            template : "verificationEmail",
            context : {
                verifyLink : emailData.verifyLink
            }
         })
     }
}