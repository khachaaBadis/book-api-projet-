import { IsInt ,IsString } from 'class-validator';

export class CreateUserDto {
  

  @IsString()
  readonly password: string;

  @IsString()
  readonly pseudo : string;

  @IsString()
  readonly email: string;
}