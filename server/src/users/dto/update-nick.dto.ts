import { IsString, MaxLength } from 'class-validator';

export class UpdateNickDto {
  @IsString()
  @MaxLength(50)
  nick: string;
}
