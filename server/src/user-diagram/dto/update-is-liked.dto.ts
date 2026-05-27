import { IsBoolean, IsString } from 'class-validator';

export class UpdateIsLikedDto {
  @IsString()
  userId: string;

  @IsString()
  diagramId: string;

  @IsBoolean()
  isLiked: boolean;
}
