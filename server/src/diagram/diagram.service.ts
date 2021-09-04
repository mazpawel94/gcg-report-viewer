import { Injectable } from '@nestjs/common';
import DiagramInterface from 'src/interfaces/diagram.interface';
import { Diagram } from './diagram.entity';
import { CreateDiagramDto } from './dto/create-diagram.dto';

@Injectable()
export class DiagramService {
  async createDiagram(newDiagram: CreateDiagramDto): Promise<number> {
    const diagram = new Diagram();
    diagram.words = newDiagram.words;
    diagram.indexMove = newDiagram.indexMove;
    await diagram.save();
    return diagram.id;
  }

  async getDiagrams(): Promise<DiagramInterface[]> {
    return Diagram.find({});
  }
}
