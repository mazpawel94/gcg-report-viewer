import { IsOptional, IsISO8601 } from 'class-validator';

export class GetDiagramsQueryDto {
  @IsOptional()
  @IsISO8601()
  created_after?: string;
}