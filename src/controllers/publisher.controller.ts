import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
    ApiBearerAuth, ApiBody,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import { PublisherService } from '../services/publisher.service';
import { CreatePublisherDto } from '../dto/create-publisher.dto';
import { Publisher } from '../entities/publisher.entity';
import {Category} from "../entities/category.entity";

@ApiBearerAuth()
@ApiTags('publisher')
@Controller('publisher')
export class PublisherController {
    constructor(private readonly PublisherService: PublisherService) {}

    @Post()
    @ApiOperation({ summary: 'Create a publisher book\'s'})
    @ApiBody({type:Category, description:"Insert a new publisher."})
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async create(@Body() createPublisherDto: CreatePublisherDto): Promise<Publisher> {
      return this.PublisherService.create(createPublisherDto);
    }

    @Get()
    @ApiOperation({summary: 'Get the publishers'})
    @ApiResponse({
        status: 200,
        description: 'Get all publisher',
        type: Publisher
    })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async findAll(): Promise<Publisher[]>{
        return this.PublisherService.findAll();
    }

    @Get(':name')
    @ApiResponse({
      status: 200,
      description: 'The found publisher',
      type: Publisher,
    })
    @ApiResponse({
        status: 404,
        description: 'No publisher with this name',
        type: Category
    })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    findOne(@Param('name') name: string): Promise<Publisher> {
      return this.PublisherService.findOne(name);
    }
}