import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from "passport"

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(session({
     name : "login session",
     secret: "usman123",
     resave : true,
     saveUninitialized : true,
     genid: (req) => {
      // Use a function to generate a unique session ID for each user.
      return 'user_' + Math.random().toString(36).substr(2, 9);
    },
     cookie : { maxAge : 60000}
  }))
  app.use(passport.initialize())
  app.use(passport.session());
  await app.listen(3000);
}
bootstrap();
