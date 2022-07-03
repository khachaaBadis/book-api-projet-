import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";
import {ApiProperty} from "@nestjs/swagger";

export type LocationDocument = Location & Document;

@Schema()
export class Location {

   @ApiProperty({example: "France", description: "Set the country location"})
   @Prop({type: String, required: true})
   country : string;

   @ApiProperty({example: "Aldi", description: "Set the name of book shop"})
   @Prop({type: String, required: true})
   name: string;

}

export const LocationSchema = SchemaFactory.createForClass(Location);