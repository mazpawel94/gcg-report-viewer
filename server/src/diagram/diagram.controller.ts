import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { DiagramService } from './diagram.service';
import { CreateDiagramDto } from './dto/create-diagram.dto';
import DiagramInterface from '../interfaces/diagram.interface';
import { GetDiagramsQueryDto } from './dto/get-diagrams.dto';
import { User } from '../users/user.entity';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { AuthGuard } from '@nestjs/passport/dist/auth.guard';

@Controller('diagram')
export class DiagramController {
  constructor(private readonly diagramService: DiagramService) {}
  @Post()
  async createDiagram(@Body() newDiagram: CreateDiagramDto): Promise<number> {
    return this.diagramService.createDiagram(newDiagram);
  }

  @Get('/private')
  @UseGuards(AuthGuard('jwt'))
  async getPrivateDiagrams(@CurrentUser() user: User): Promise<DiagramInterface[]> {
    return this.diagramService.getPrivateDiagrams(user);
  }
  @Get()
  async getDiagrams(@Query() query: GetDiagramsQueryDto): Promise<DiagramInterface[]> {
    return this.diagramService.getDiagrams(query.created_after);
  }
}
