import { IsInt, IsOptional, Min } from 'class-validator';

export class CreateDiagramDto {
  words: string;
  letters: string;
  solution: string;
  diagramIsPublic: boolean;
  tags: {
    id: string;
    text: string;
  }[];

  @IsOptional()
  @IsInt()
  @Min(0)
  level?: number;
}
