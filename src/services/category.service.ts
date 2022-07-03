import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Category, CategoryDocument} from "../entities/category.entity";
import {Model} from "mongoose";
import {CreateCategoryDto} from "src/dto/create-category.dto";

//Dorian Jullian
@Injectable()
export class CategoryService {

    constructor(@InjectModel(Category.name) private model: Model<CategoryDocument>) {}

    async create(createCatDto: CreateCategoryDto): Promise<Category> {
        const created = new this.model(createCatDto);
        return await created.save();
    }

    async findAll(): Promise<Category[]> {
        return await this.model.find().exec();
    }

    async findOne(name: string): Promise<Category> {
        return await this.model.findOne({name: name}).exec();
    }

}