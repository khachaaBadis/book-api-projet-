// Auriane GS
import { IsInt, IsString } from 'class-validator';

export class CreateLangDto {
  @IsString()
  name: string;
}