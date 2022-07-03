import { IsInt ,IsString,IsDate} from 'class-validator';

export class CreateDictionaryDto {
  @IsInt()
  id: number;

  
  @IsString()
   name : string;
}