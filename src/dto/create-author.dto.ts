import { IsInt,IsString } from 'class-validator';

//badis
export class CreateAuthorDto {

  @IsString()
  readonly lastname: string;
  
  @IsString()
  readonly firstname: string;
}