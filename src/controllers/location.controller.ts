import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
    ApiBearerAuth, ApiBody,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import {LocationService} from "../services/location.service";
import {CreateLocationDto} from "../dto/create-location.dto";
import {Location} from "../entities/location.entity";

@ApiBearerAuth()
@ApiTags('location')
@Controller('location')
export class LocationController {
    constructor(private readonly Service: LocationService) {}

    @Post()
    @ApiOperation({ summary: 'Create a location'})
    @ApiBody({type:Location, description:"Insert a new location."})
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async create(@Body() createLocationDto: CreateLocationDto): Promise<Location> {
      return this.Service.create(createLocationDto);
    }

    @Get()
    @ApiOperation({summary: 'Get the locations'})
    @ApiResponse({
        status: 200,
        description: 'Get all location',
        type: Location
    })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async findAll(): Promise<Location[]>{
        return this.Service.findAll();
    }

    @Get(':name')
    @ApiOperation({summary:'Found a location from name'})
    @ApiResponse({
        status: 200,
        description: 'Found the location',
        type: Location
    })
    @ApiResponse({
        status: 404,
        description: 'No location with this name',
        type: Location
    })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    findName(@Param('name') name: string): Promise<Location> {
      return this.Service.findOne({name: name});
    }

    @Get(':country')
    @ApiOperation({summary:'Found a location from country'})
    @ApiResponse({
        status: 200,
        description: 'Found the location',
        type: Location
    })
    @ApiResponse({
        status: 404,
        description: 'No location with this country',
        type: Location
    })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    findCountry(@Param('country') name: string): Promise<Location> {
        return this.Service.findOne({country: name});
    }
}