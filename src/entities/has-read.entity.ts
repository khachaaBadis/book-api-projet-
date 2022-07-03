/**
 * Dorian Jullian
 */
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import {User} from "./user";
import {ApiProperty} from "@nestjs/swagger";
import {mongo} from "mongoose";
import {Book} from "./book.entity";
import {Dictionary} from "./dictionary";

export type HasReadDocument = HasRead & Document;

@Schema()
export class HasRead {

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
    @ApiProperty()
    user: User;

    @Prop({ nullable: true, type: mongoose.Schema.Types.ObjectId, ref: 'Dictionary' })
    @ApiProperty()
    dictionary: Dictionary;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Book' })
    @ApiProperty()
    book: Book;

    @Prop()
    @ApiProperty()
    note: number;

    @Prop()
    @ApiProperty()
    commentary: string;

}

export const HasReadSchema = SchemaFactory.createForClass(HasRead);