//badis 

 import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
 import {Document} from 'mongoose';
 import {ApiProperty} from "@nestjs/swagger";
 
 export type AuthorDocument = Author & Document;
 
//  badis
 @Schema()
 export class Author {
 
     /**
      * The name of the author
      * @example David August
      */
     @ApiProperty({example: "David", description: "The first name of the author"})
     @Prop({ type: String, required: true})
     lastname: string;

     @ApiProperty({example: "August", description: "The last name of the author"})
     @Prop({ type: String, required: true})
     firstname: string;


 }
 
 export const AuthorSchema = SchemaFactory.createForClass(Author);