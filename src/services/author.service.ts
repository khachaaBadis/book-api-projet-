import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import { Author, AuthorDocument } from "src/entities/author.entities";
import { CreateAuthorDto } from "src/dto/create-author.dto";

//badis
@Injectable()
export class AuthorService {

    constructor(@InjectModel(Author.name) private model: Model<AuthorDocument>) {}

    async create(createAuthorDto: CreateAuthorDto): Promise<Author> {
        const created = new this.model(createAuthorDto);
        return await created.save();
    }

    async findAll(): Promise<Author[]> {
        return await this.model.find().exec();
    }

    async findOne(firstname: string): Promise<Author> {
        return await this.model.findOne({firstname: firstname}).exec();
    }

    

}