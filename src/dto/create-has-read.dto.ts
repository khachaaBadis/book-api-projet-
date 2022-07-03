import { IsInt ,IsString,IsDate} from 'class-validator';

export class CreateHasReadDto {

  @IsInt()
  id: number;

  @IsInt()
  id_dictionary: number;

  @IsInt()
  id_user: number;

  @IsInt()
  note: number;

  @IsString()
  commentary : string;

}