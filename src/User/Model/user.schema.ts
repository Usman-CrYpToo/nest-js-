import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"

@Schema()
export class user { 
    @Prop({required : true, unique : true})
    username : string;

   @Prop({required : true, unique : true}) 
   email : string;

   @Prop({required : true})
   password : string;

   @Prop({required: true})
   isverified : boolean;

   @Prop({required: true})
   isdriver: boolean;


}

export const userSchema = SchemaFactory.createForClass(user);