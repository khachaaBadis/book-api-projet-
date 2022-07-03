// Auriane GS
import {  IsString } from 'class-validator';

export class CreateLocationDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly country: string;
}