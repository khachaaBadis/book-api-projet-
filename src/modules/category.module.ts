import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {CategoryController} from "../controllers/category.controller";
import {CategoryService} from "../services/category.service";
import {Category, CategorySchema} from "../entities/category.entity";
import { AuthModule } from 'src/jwt/auth/auth.module';
import { AuthService } from 'src/jwt/auth/auth.service';
import { UserService } from 'src/services/User.service';
import { UserModule } from './user.module';

//Dorian
@Module({
    imports: [
        MongooseModule.forFeature([{ name: Category.name, schema: CategorySchema, }]), 
        AuthModule,
        UserModule,
    ],
    controllers: [CategoryController],
    providers: [CategoryService, AuthService],
})
export class CategoryModule {}
