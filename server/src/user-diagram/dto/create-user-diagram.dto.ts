export class CreateUserDiagramDto {
  userId: string;
  diagramId: string;
  attempts: number;
  usedHints: number;
  correctlySolved: boolean;
}
