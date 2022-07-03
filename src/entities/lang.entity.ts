import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import {Document} from "mongoose";

export type LangDocument = Lang & Document;

export class Lang {
 // Auriane
  @ApiProperty({example: "Français", description: "The book lang translation"})
  @Prop({ type: String, required: true})
  name: string;
}
export const LangSchema = SchemaFactory.createForClass(Lang);