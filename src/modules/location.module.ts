import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {LocationService} from "../services/location.service";
import {LocationController} from "../controllers/location.controller";
import {Location, LocationSchema} from "../entities/location.entity";

//Dorian
@Module({
    imports: [MongooseModule.forFeature([{ name: Location.name, schema: LocationSchema }])],
    controllers: [LocationController],
    providers: [LocationService],
})
export class LocationModule {}
