import { BadRequestException, Injectable } from '@nestjs/common';
import { Diagram } from './diagram.entity';
import { CreateDiagramDto } from './dto/create-diagram.dto';
import { Tag } from '../tag/tag.entity';
import DiagramInterface from '../interfaces/diagram.interface';
import { FindOptionsWhere, MoreThan, MoreThanOrEqual } from 'typeorm';
import { User } from '../users/user.entity';

@Injectable()
export class DiagramService {
  async createDiagram(newDiagram: CreateDiagramDto): Promise<number> {
    const diagram = new Diagram();
    diagram.words = newDiagram.words;
    diagram.letters = newDiagram.letters;
    diagram.solution = newDiagram.solution;
    diagram.isPublic = newDiagram.diagramIsPublic;

    diagram.level = newDiagram.level ?? 0;

    if (newDiagram.tags?.length) {
      const tags = await Promise.all(
        newDiagram.tags.map(async (t) => {
          let tag = await Tag.findOne({ where: { name: t.text } });
          if (!tag) {
            tag = new Tag();
            tag.name = t.text;
            await tag.save();
          }
          return tag;
        }),
      );
      diagram.tags = tags;
    }

    await diagram.save();

    return diagram.id;
  }

  async getPrivateDiagrams(user: User): Promise<DiagramInterface[]> {
    const diagrams = await Diagram.find({
      where: { authorId: user.id },
      relations: ['tags'],
    });

    return diagrams.map((diagram) => ({
      ...diagram,
      tags: diagram.tags?.map((tag) => tag.name) ?? [],
    }));
  }

  async getDiagrams(createdAfter?: string): Promise<DiagramInterface[]> {
    const where: FindOptionsWhere<Diagram> = {
      isPublic: true,
      level: MoreThanOrEqual(1),
    };
    if (createdAfter) where.createdAt = MoreThan(new Date(createdAfter));

    const diagrams = await Diagram.find({
      where,
      relations: ['tags'],
    });

    return diagrams.map((diagram) => ({
      ...diagram,
      tags: diagram.tags?.map((tag) => tag.name) ?? [],
    }));
  }
}
