import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {PublisherController} from "../controllers/publisher.controller";
import {PublisherService} from "../services/publisher.service";
import {Publisher, PublisherSchema} from "../entities/publisher.entity";

//Dorian
@Module({
    imports: [MongooseModule.forFeature([{ name: Publisher.name, schema: PublisherSchema }])],
    controllers: [PublisherController],
    providers: [PublisherService],
})
export class PublisherModule {}
