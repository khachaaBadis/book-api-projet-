import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { type } from "os";
import { CreateAuthorDto } from "src/dto/create-author.dto";
import { AuthorService } from "src/services/author.service";
import {Author} from "../entities/author.entities";



// badis 
@ApiBearerAuth()
@ApiTags('author')
@Controller('author')

export class AuthorController {

    constructor(private readonly service: AuthorService) {}

    @Post()
    @ApiOperation({summary: 'create an author'})
    @ApiBody({type:Author,description: 'insert the author name'})
    @ApiResponse({ status: 403, description: 'forbidden'})

    async create(@Body() CreateDto: CreateAuthorDto): Promise<Author> {
        return this.service.create(CreateDto);
    }

    @Get(":firstname")
    @ApiOperation({summary: 'Get the author first name'})
    @ApiResponse({
        status: 200,
        description: 'Get first name ',
        type: Author 
    })
    @ApiResponse({
        status: 404,
        description: 'No author with this first name',
        type: Author 
    })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async findOne(@Param('firstname') name: string): Promise<Author> {
        return this.service.findOne(name);
    
    }

    @Get()
    @ApiOperation({summary: 'get the authors names'})
    @ApiResponse({
        status: 200,
        description: 'get all names',
        type: Author

    })

    @ApiResponse({ status: 403, description: 'forbidden'})
    async findAll(): Promise<Author[]> {
        return this.service.findAll();
    }
}