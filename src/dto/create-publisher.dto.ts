// Auriane GS
import { IsInt, IsString } from 'class-validator';

export class CreatePublisherDto { 

  @IsInt()
  name: number;
}