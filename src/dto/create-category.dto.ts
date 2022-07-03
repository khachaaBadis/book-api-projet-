import { IsInt,IsString } from 'class-validator';

//Dorian
export class CreateCategoryDto {

  @IsString()
  readonly name: string;

}