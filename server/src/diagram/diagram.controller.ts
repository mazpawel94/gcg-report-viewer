import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { DiagramService } from './diagram.service';
import { CreateDiagramDto } from './dto/create-diagram.dto';
import DiagramInterface from '../interfaces/diagram.interface';
import { GetDiagramsQueryDto } from './dto/get-diagrams.dto';

@Controller('diagram')
export class DiagramController {
  constructor(private readonly diagramService: DiagramService) {}
  @Post()
  async createDiagram(@Body() newDiagram: CreateDiagramDto): Promise<number> {
    return this.diagramService.createDiagram(newDiagram);
  }
  @Get()
  async getDiagrams(@Query() query: GetDiagramsQueryDto): Promise<DiagramInterface[]> {
    return this.diagramService.getDiagrams(query.created_after);
  }
}
