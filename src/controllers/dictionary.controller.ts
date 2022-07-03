import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import { CreateDictionaryDto } from 'src/dto/dictionary.dto';
import { Dictionary } from 'src/entities/dictionary';
import {DictionaryService} from "../services/dictionary.service";



//Dorian
@ApiBearerAuth()
@ApiTags('dictionary')
@Controller('dictionary')
export class DictionaryController {
    constructor(private readonly Service: DictionaryService) {}

    @Post()
    @ApiOperation({ summary: 'Create a dictionary book'})
    @ApiBody({type:Dictionary, description:"Insert a new dictionary for book."})
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async create(@Body() createDto: CreateDictionaryDto): Promise<Dictionary> {
        return this.Service.create(createDto);
    }

    @Get()
    @ApiOperation({summary: 'Get the dictionary book'})
    @ApiResponse({
        status: 200,
        description: 'Get all categories',
        type: Dictionary
    })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async findAll(): Promise<Dictionary[]>{
        return this.Service.findAll();
    }

    @Get(':name')
    @ApiOperation({summary:'Found a dictionary book'})
    @ApiResponse({
        status: 200,
        description: 'Found the dictionary with the name',
        type: Dictionary
    })
    @ApiResponse({
        status: 404,
        description: 'No dictionary with this name',
        type: Dictionary
    })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async findOne(@Param('name') name: string): Promise<Dictionary> {
        return this.Service.findOne(name);
    }
}
