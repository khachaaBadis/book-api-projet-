import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "../entities/User";
import { Model } from "mongoose";
import { CreateUserDto } from "src/dto/create-user.dto";

@Injectable()
export class UserService {

    constructor(@InjectModel(User.name) private model: Model<UserDocument>) {}

    async create(createUserDto: CreateUserDto): Promise<User> {
        const createdCat = new this.model(createUserDto);
        return createdCat.save();
    }

    async findAll(): Promise<User[]> {
        return this.model.find().exec();
    }

   async findOne(pseudo: string): Promise<User | undefined> {
        return await this.model.findOne({pseudo:pseudo}).exec();
    }
}