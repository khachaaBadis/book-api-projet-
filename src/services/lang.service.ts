import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLangDto } from '../dto/create-lang.dto';
import {Lang, LangDocument} from '../entities/lang.entity';

//Dorian
@Injectable()
export class LangService {
  constructor(@InjectModel(Lang.name) private model: Model<LangDocument>) {}

  async create(CreateLangDto: CreateLangDto): Promise<Lang> {
      const createdLang = new this.model(CreateLangDto);
      return await createdLang.save();
  }

  async findAll(): Promise<Lang[]> {
    return await this.model.find().exec();
  }

  async findOne(name: string): Promise<Lang> {
      return await this.model.findOne({name:name}).exec();
  }
}
