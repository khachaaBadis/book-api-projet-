import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {HasRead, HasReadSchema} from "../entities/has-read.entity";
import {HasReadController} from "../controllers/has-read.controller";
import {HasReadService} from "../services/has-read.service";

//Dorian
@Module({
    imports: [MongooseModule.forFeature([{ name: HasRead.name, schema: HasReadSchema }])],
    controllers: [HasReadController],
    providers: [HasReadService],
})
export class HasReadModule {}
