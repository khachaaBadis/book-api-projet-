import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePublisherDto } from '../dto/create-publisher.dto';
import {Publisher, PublisherDocument} from '../entities/publisher.entity';

//Dorian
@Injectable()
export class PublisherService {
  constructor(@InjectModel(Publisher.name) private model: Model<PublisherDocument>) {}

  async create(createCatDto: CreatePublisherDto): Promise<Publisher> {
      const createdPublisher = new this.model(CreatePublisherDto);
      return await createdPublisher.save();
  }

  async findAll(): Promise<Publisher[]> {
      return await this.model.find().exec();
  }

  async findOne(name: string): Promise<Publisher> {
      return await this.model.findOne({name:name}).exec();
  }
}
