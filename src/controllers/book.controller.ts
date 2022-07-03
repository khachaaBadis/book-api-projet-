import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import {
    ApiBearerAuth, ApiBody,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import { BookService } from '../services/book.service';
import { CreateBookDto } from '../dto/create-book.dto';
import {Book} from '../entities/book.entity';
import { JwtAuthGuard } from 'src/jwt/auth/jwd-auth.guard';

@ApiBearerAuth()
@ApiTags('book')
@Controller('book')
export class BookController {
    constructor(private readonly Service: BookService) {}

    @Post()
    @ApiOperation({ summary: 'Create a new book' })
    @ApiBody({type: CreateBookDto, description: 'Insert a new book to the collection'})
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async create(@Body() createBookDto: CreateBookDto): Promise<Book> {
      return this.Service.create(createBookDto);
    }

    @Post('api')
    @ApiOperation({summary: 'Get the collection book'})
    @ApiResponse({
        status: 200,
        description: 'Get all books',
        type: Book
    })
    @UseGuards(JwtAuthGuard)
    async findAll(): Promise<Book[]>{
        return this.Service.findAll();
    }


    @Get(':title')
    @ApiOperation({summary:'Found a book'})
    @ApiResponse({
        status: 200,
        description: 'Found the book with the title',
        type: Book
    })
    async findOne(@Param('title') title: string): Promise<Book> {
      return this.Service.findOne(title);
    }
}