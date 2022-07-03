// Auriane GS
import {IsArray, IsDateString, IsInt, IsString} from 'class-validator';
import * as mongoose from "mongoose";
import {Prop} from "@nestjs/mongoose";
import {ApiProperty} from "@nestjs/swagger";

export class CreateBookDto { 

  @IsString()
  @ApiProperty({example: "Le seigneur des anneaux", description: "Set the title of the book"})
  @Prop({type: mongoose.Schema.Types.String, required:true})
  readonly title: string;

  @IsString()
  @ApiProperty({example: "Dans la contré...", description: "Set the summary of the book"})
  @Prop({type: mongoose.Schema.Types.String, required:true})
  readonly summary: string;

  @IsString()
  @ApiProperty({example: "http://url/mon-image.jpg", description: "Set the preview image of the book"})
  @Prop({type: mongoose.Schema.Types.String, required:true})
  readonly link_preview: string;

  @IsDateString()
  @ApiProperty({example: "2015-02-15", description: "Set the release date of the book"})
  @Prop({type: mongoose.Schema.Types.Date, required: true})
  readonly date_released: String;
}