import { Diagram } from '../../diagram/diagram.entity';

export class SyncResponseDto {
  attemptedDiagramIds: string[];
  likedDiagrams: Diagram[];
}
