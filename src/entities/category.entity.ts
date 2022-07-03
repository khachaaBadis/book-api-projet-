/**
 * Dorian Jullian
 */
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from 'mongoose';
import {ApiProperty} from "@nestjs/swagger";

export type CategoryDocument = Category & Document;

//Dorian
@Schema()
export class Category {

    /**
     * The name of the category
     * @example Sci-fi
     */
    @ApiProperty({example: "Sci-fi", description: "The category or tag book."})
    @Prop({ type: String, required: true})
    name: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);