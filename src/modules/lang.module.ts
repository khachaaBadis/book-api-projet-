import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {Lang, LangSchema} from "../entities/lang.entity";
import {LangController} from "../controllers/lang.controller";
import {LangService} from "../services/lang.service";

//Dorian
@Module({
    imports: [MongooseModule.forFeature([{ name: Lang.name, schema: LangSchema }])],
    controllers: [LangController],
    providers: [LangService],
})
export class LangModule {}
