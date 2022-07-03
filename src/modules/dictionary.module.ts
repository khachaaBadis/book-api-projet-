import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Dictionary, DictionarySchema } from '../entities/dictionary';
import { DictionaryController } from '../controllers/dictionary.controller';
import { DictionaryService } from '../services/dictionary.service';

//Auriane
@Module({
    imports: [MongooseModule.forFeature([{ name: Dictionary.name, schema: DictionarySchema }])],
    controllers: [DictionaryController],
    providers: [DictionaryService],
})
export class DictionaryModule {}