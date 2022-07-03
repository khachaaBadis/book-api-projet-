import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
    ApiBearerAuth, ApiBody,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import { LangService } from '../services/lang.service';
import { CreateLangDto } from '../dto/create-lang.dto';
import { Lang } from '../entities/lang.entity';
import {Category} from "../entities/category.entity";

@ApiBearerAuth()
@ApiTags('lang')
@Controller('lang')
export class LangController {
    constructor(private readonly Service: LangService) {}

    @Post()
    @ApiOperation({ summary: 'Create a lang'})
    @ApiBody({type:Lang, description:"Insert a new lang."})
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async create(@Body() createCatDto: CreateLangDto): Promise<Lang> {
      return this.Service.create(createCatDto);
    }

    @Get()
    @ApiOperation({summary: 'Get the languages'})
    @ApiResponse({
        status: 200,
        description: 'Get all lang',
        type: Lang
    })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async findAll(): Promise<Lang[]>{
        return this.Service.findAll();
    }

    @Get(':name')
    @ApiOperation({summary:'Found a lang'})
    @ApiResponse({
        status: 200,
        description: 'Found the lang',
        type: Lang
    })
    @ApiResponse({
        status: 404,
        description: 'No lang with this name',
        type: Lang
    })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    findOne(@Param('name') name: string): Promise<Lang> {
      return this.Service.findOne(name);
    }
}