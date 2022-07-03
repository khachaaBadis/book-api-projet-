import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookController } from 'src/controllers/book.controller';
import { Book, BookSchema } from 'src/entities/book.entity';
import { AuthModule } from 'src/jwt/auth/auth.module';
import { AuthService } from 'src/jwt/auth/auth.service';
import { BookService } from 'src/services/book.service';
import { UserModule } from './user.module';

//Auriane
@Module({
    imports: [
        MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
        AuthModule,
        UserModule,
    ],
    controllers: [BookController],
    providers: [BookService, AuthService],
})
export class BookModule {}