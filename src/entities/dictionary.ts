/**
 * Dorian Jullian
 */
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";

export type DictionaryDocument = Dictionary & Document;

@Schema()
export class Dictionary {

    /**
     * The name of the dictionary collection
     * @example My Sci-fi Collec
     */
    @ApiProperty({example: "label", description: "pseudo of dictionary"})
    @Prop({ type: String, required: true})
    name: string;

}

export const DictionarySchema = SchemaFactory.createForClass(Dictionary);