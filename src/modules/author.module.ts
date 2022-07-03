import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorController } from 'src/controllers/author.controller';
import { Author, AuthorSchema } from 'src/entities/author.entities';
import { AuthorService } from 'src/services/author.service';

//badis
@Module({
    imports: [MongooseModule.forFeature([{ name: Author.name, schema: AuthorSchema }])],
    controllers: [AuthorController],
    providers: [AuthorService],
})
export class AuthorModule {}