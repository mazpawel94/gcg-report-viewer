import { IsString, IsNotEmpty } from 'class-validator';

export class GoogleDto {
  @IsString()
  @IsNotEmpty()
  idToken: string;
}