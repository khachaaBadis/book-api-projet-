import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {Location, LocationDocument} from "../entities/location.entity";
import {CreateLocationDto} from "../dto/create-location.dto";

//Dorian
@Injectable()
export class LocationService {
  constructor(@InjectModel(Location.name) private model: Model<LocationDocument>) {}

  async create(createLocationDto: CreateLocationDto): Promise<Location> {
      const createdLang = new this.model(createLocationDto);
      return await createdLang.save();
  }

  async findAll(): Promise<Location[]> {
    return await this.model.find().exec();
  }

  async findOne(filter: { name:string }|{country:string}): Promise<Location> {
      return await this.model.findOne(filter).exec();
  }
}
