import { Inject, Injectable } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { Diagram } from './diagram.entity';
import { CreateDiagramDto } from './dto/create-diagram.dto';
import { Tag } from '../tag/tag.entity';
import DiagramInterface from '../interfaces/diagram.interface';
import { FindOptionsWhere, MoreThanOrEqual } from 'typeorm';
import { User } from '../users/user.entity';

const PUBLIC_DIAGRAMS_CACHE_KEY = 'public-diagrams';

@Injectable()
export class DiagramService {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  async createDiagram(newDiagram: CreateDiagramDto): Promise<number> {
    const diagram = new Diagram();
    diagram.words = newDiagram.words;
    diagram.letters = newDiagram.letters;
    diagram.solution = newDiagram.solution;
    diagram.isPublic = newDiagram.diagramIsPublic;
    diagram.lexicon = newDiagram.lexicon || 'osps52';

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
    await this.appendToPublicDiagramsCache(diagram);

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
    const diagrams = await this.getPublicDiagrams();
    const filtered = createdAfter
      ? diagrams.filter((diagram) => diagram.createdAt > new Date(createdAfter))
      : diagrams;

    return filtered.map((diagram) => ({
      ...diagram,
      tags: diagram.tags?.map((tag) => tag.name) ?? [],
    }));
  }

  private async getPublicDiagrams(): Promise<Diagram[]> {
    const cached = await this.cacheManager.get<Diagram[]>(PUBLIC_DIAGRAMS_CACHE_KEY);
    if (cached) return cached;

    const where: FindOptionsWhere<Diagram> = {
      isPublic: true,
      level: MoreThanOrEqual(1),
    };
    const diagrams = await Diagram.find({ where, relations: ['tags'] });
    await this.cacheManager.set(PUBLIC_DIAGRAMS_CACHE_KEY, diagrams);

    return diagrams;
  }

  private async appendToPublicDiagramsCache(diagram: Diagram): Promise<void> {
    if (!diagram.isPublic || diagram.level < 1) return;

    const cached = await this.cacheManager.get<Diagram[]>(PUBLIC_DIAGRAMS_CACHE_KEY);
    if (!cached) return;

    await this.cacheManager.set(PUBLIC_DIAGRAMS_CACHE_KEY, [...cached, diagram]);
  }
}
