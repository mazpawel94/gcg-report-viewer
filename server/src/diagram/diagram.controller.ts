import { Body, Controller, Get, Post } from '@nestjs/common';
import DiagramInterface from 'src/interfaces/diagram.interface';
import { DiagramService } from './diagram.service';
import { CreateDiagramDto } from './dto/create-diagram.dto';

@Controller('diagram')
export class DiagramController {
  constructor(private readonly diagramService: DiagramService) {}
  @Post()
  async createDiagram(@Body() newDiagram: CreateDiagramDto): Promise<number> {
    return this.diagramService.createDiagram(newDiagram);
  }
  @Get()
  async getDiagrams(): Promise<DiagramInterface[]> {
    return this.diagramService.getDiagrams();
  }
}
