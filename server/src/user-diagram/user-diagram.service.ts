import { Injectable } from '@nestjs/common';
import { UserDiagram } from './user-diagram.entity';
import { CreateUserDiagramDto } from './dto/create-user-diagram.dto';

@Injectable()
export class UserDiagramService {
  async createUserDiagram(newUserDiagram: CreateUserDiagramDto): Promise<UserDiagram> {
    const userDiagram = UserDiagram.create();
    userDiagram.userId = newUserDiagram.userId;
    userDiagram.diagramId = newUserDiagram.diagramId;
    userDiagram.attempts = newUserDiagram.attempts;
    userDiagram.usedHints = newUserDiagram.usedHints;
    userDiagram.correctlySolved = newUserDiagram.correctlySolved;
    return await userDiagram.save();
  }
}
