import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Dictionary, DictionaryDocument} from "../entities/Dictionary";
import {Model} from "mongoose";
import { CreateDictionaryDto } from "src/dto/Dictionary.dto";

@Injectable()
export class DictionaryService {
    

    constructor(@InjectModel(Dictionary.name) private model: Model<DictionaryDocument>) {}

    async create(createCatDto: CreateDictionaryDto): Promise<Dictionary> {
        const createdCat = new this.model(createCatDto);
        return createdCat.save();
    }

    async findAll(): Promise<Dictionary[]> {
        return this.model.find().exec();
    }
    async findOne(name: string): Promise<Dictionary> {
        return this.model.findOne({name:name}).exec();
    }

}