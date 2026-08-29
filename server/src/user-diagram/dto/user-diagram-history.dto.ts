import { UserDiagram } from '../user-diagram.entity';

export class UserDiagramHistoryDto {
  items: UserDiagram[];
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}
