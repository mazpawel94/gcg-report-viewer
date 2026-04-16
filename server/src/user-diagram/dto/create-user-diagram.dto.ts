export class CreateUserDiagramDto {
  userId: string;
  diagramId: number;
  attempts: number;
  usedHints: number;
  correctlySolved: boolean;
}
