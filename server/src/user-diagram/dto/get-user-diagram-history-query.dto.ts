import { IsOptional, IsNumberString, IsBooleanString } from 'class-validator';

export class GetUserDiagramHistoryQueryDto {
  @IsOptional()
  @IsNumberString()
  page?: string;

  @IsOptional()
  @IsBooleanString()
  onlyIncorrect?: string;

  @IsOptional()
  @IsBooleanString()
  onlyWithHints?: string;
}
