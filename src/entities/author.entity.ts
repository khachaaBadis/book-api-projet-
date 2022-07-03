import {Document} from "mongoose";
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

export type AuthorDocument = Author & Document;

@Schema()
export class Author {

  @Prop()
  last_name: string;

  @Prop()
  first_name: string;
}

export const AuthorSchema = SchemaFactory.createForClass(Author);