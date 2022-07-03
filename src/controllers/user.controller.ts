import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user';
import { UserService } from '../services/user.service';

@ApiBearerAuth()
@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private readonly Service: UserService) {}

    @Post()
    @ApiOperation({ summary: 'Create a User book' })
    @ApiBody({type:User, description:"Insert a new user."})
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async create(@Body() createDto: CreateUserDto): Promise<User> {
        return this.Service.create(createDto);
    }

    @Get(':pseudo')
    @ApiResponse({
        status: 200,
        description: 'The found record',
        type: User,
    })
    findOne(@Param('pseudo') pseudo:string): Promise<User> {
        return this.Service.findOne(pseudo);
       // return null;
    }

}
