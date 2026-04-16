import { Body, Controller, Post } from '@nestjs/common';
import { UserDiagramService } from './user-diagram.service';
import { CreateUserDiagramDto } from './dto/create-user-diagram.dto';
import { UserDiagram } from './user-diagram.entity';

@Controller('user-diagram')
export class UserDiagramController {
  constructor(private readonly userDiagramService: UserDiagramService) {}

  @Post()
  async createUserDiagram(@Body() newUserDiagram: CreateUserDiagramDto): Promise<UserDiagram> {
    return this.userDiagramService.createUserDiagram(newUserDiagram);
  }
}
