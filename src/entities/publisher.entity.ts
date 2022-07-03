import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import {Document} from "mongoose";

export type PublisherDocument = Publisher & Document;

export class Publisher {
  //Auriane 

  @ApiProperty({example:"Français", description: "The publisher book's"})
  @Prop({type: String, required:true})
  name: string;
}

export const PublisherSchema = SchemaFactory.createForClass(Publisher);
