/**
 * Dorian Jullian
 */
 import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
 import {Document} from 'mongoose';
 import {ApiProperty} from "@nestjs/swagger";

export type UserDocument = User & Document;

@Schema()
export class User {
    /**
     * The pseudo of the user
     * @example John
     */
    @ApiProperty({example: "John", description: "pseudo of users"})
    @Prop({ type: String, required: true})
    pseudo: string;

    /**
     * The password of the user
     * @example hash
     */
    @ApiProperty({example: "John", description: "pseudo of users"})
    @Prop({ type: String, required: true})
     password: string;

    /**
     * The email of the user
     */
    @ApiProperty({example: "John", description: "pseudo of users"})
    @Prop({ type: String, required: true})
     email: string;

}

export const UserSchema = SchemaFactory.createForClass(User);