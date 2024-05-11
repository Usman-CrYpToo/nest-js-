import { Module } from "@nestjs/common";
import { MailerModule } from "@nestjs-modules/mailer";
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { join } from "path";
import { emailService } from "./Service/email.service";

@Module({
    imports : [MailerModule.forRoot({
        transport : {
            host : "smtp.gmail.com",
            auth : {
                user : "udemyfree44@gmail.com",
                pass : "qgjw dggm nmfv skka"
            }
        },
        defaults :  {
            from : "udemyfree44@gmail.com"
        },
        template : {
            dir : join(__dirname, "./Templates"),
            adapter : new HandlebarsAdapter(),
            options : {
                strict : true
            }
        }
    }
    )],
    providers : [emailService],
    exports : [emailService]

})

export class emailModule {}