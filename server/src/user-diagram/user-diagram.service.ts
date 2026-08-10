import { BadRequestException, Injectable } from '@nestjs/common';
import { UserDiagram } from './user-diagram.entity';
import { CreateUserDiagramDto } from './dto/create-user-diagram.dto';
import { UpdateIsLikedDto } from './dto/update-is-liked.dto';
import { SyncResponseDto } from './dto/sync-response.dto';
import { ChallengeResultDto } from './dto/challenge-result.dto';

const DATE_TAG_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

@Injectable()
export class UserDiagramService {
  async createUserDiagram(newUserDiagram: CreateUserDiagramDto, userId: string): Promise<UserDiagram> {
    console.log('odbieram createUserDiagram... ');
    console.log(newUserDiagram.diagramId, newUserDiagram.userId, newUserDiagram.usedHints, userId);
    const userDiagram = UserDiagram.create();
    userDiagram.userId = userId || newUserDiagram.userId;
    userDiagram.diagramId = newUserDiagram.diagramId;
    userDiagram.attempts = newUserDiagram.attempts;
    userDiagram.usedHints = newUserDiagram.usedHints;
    userDiagram.correctlySolved = newUserDiagram.correctlySolved;
    return await userDiagram.save();
  }

  async updateIsLiked(dto: UpdateIsLikedDto): Promise<UserDiagram> {
    const diagram = await UserDiagram.findOne({
      where: {
        userId: dto.userId,
        diagramId: dto.diagramId,
      },
    });

    diagram.isLiked = dto.isLiked;
    return diagram.save();
  }

  async getSyncData(userId: string): Promise<SyncResponseDto> {
    console.log('...... getSyncData ......');
    const userDiagrams = await UserDiagram.find({
      where: { userId },
      relations: ['diagram'],
    });
    console.log(userId, '-> ', userDiagrams.length);
    const attemptedDiagramIds = userDiagrams.filter((ud) => !ud.isLiked).map((ud) => ud.diagramId);

    const likedDiagrams = userDiagrams.filter((ud) => ud.isLiked).map((ud) => ud.diagram);

    return { attemptedDiagramIds, likedDiagrams };
  }

  async getUserStats(userId: string) {
    const records = await UserDiagram.find({
      where: { userId },
      order: { createdAt: 'ASC' },
    });

    if (records.length === 0) {
      return this.emptyStats();
    }
    const totalSolved = records.length;
    const correctlySolved = records.filter((r) => r.correctlySolved).length;

    const correctRecords = records.filter((r) => r.correctlySolved);

    const solvedWithoutHints = correctRecords.filter((r) => r.usedHints === 0).length;
    const solvedWithoutMistakes = correctRecords.filter((r) => r.attempts === 0).length;

    const longestNoHintsStreak = this.calcStreak(records, (r) => r.correctlySolved && r.usedHints === 0);
    const longestNoMistakesStreak = this.calcStreak(records, (r) => r.correctlySolved && r.attempts === 0);

    const currentNoHintsStreak = this.calcCurrentStreak(records, (r) => r.correctlySolved && r.usedHints === 0);
    const currentNoMistakesStreak = this.calcCurrentStreak(records, (r) => r.correctlySolved && r.attempts === 0);
    return {
      totalSolved,
      correctlySolved,
      solvedWithoutHints,
      solvedWithoutMistakes,
      longestNoHintsStreak,
      longestNoMistakesStreak,
      currentNoHintsStreak,
      currentNoMistakesStreak,
    };
  }

  async getChallengeResults(date: string): Promise<ChallengeResultDto[]> {
    if (!DATE_TAG_PATTERN.test(date)) {
      throw new BadRequestException('date must be in YYYY-MM-DD format');
    }

    const records = await UserDiagram.createQueryBuilder('userDiagram')
      .innerJoin('userDiagram.diagram', 'diagram')
      .innerJoin('diagram.tags', 'tag', 'tag.name = :date', { date })
      .leftJoinAndSelect('userDiagram.user', 'user')
      .getMany();

    const byUser = new Map<
      string,
      { name: string | null; correctlySolved: number; hints: number; attempts: number; earliest: Date; latest: Date }
    >();

    for (const record of records) {
      let agg = byUser.get(record.userId);
      if (!agg) {
        agg = {
          name: record.user?.displayName ?? null,
          correctlySolved: 0,
          hints: 0,
          attempts: 0,
          earliest: record.createdAt,
          latest: record.createdAt,
        };
        byUser.set(record.userId, agg);
      }

      agg.correctlySolved += record.correctlySolved ? 1 : 0;
      agg.hints += record.usedHints;
      agg.attempts += record.attempts;
      if (record.createdAt < agg.earliest) agg.earliest = record.createdAt;
      if (record.createdAt > agg.latest) agg.latest = record.createdAt;
    }

    return Array.from(byUser.values()).map((agg) => ({
      name: agg.name,
      correctlySolved: agg.correctlySolved,
      hints: agg.hints,
      attempts: agg.attempts,
      time: agg.latest.getTime() - agg.earliest.getTime(),
    }));
  }

  private calcStreak(records: UserDiagram[], predicate: (r: UserDiagram) => boolean): number {
    let longest = 0;
    let current = 0;

    for (const record of records) {
      if (predicate(record)) {
        current++;
        longest = Math.max(longest, current);
      } else {
        current = 0;
      }
    }

    return longest;
  }

  private calcCurrentStreak(records: UserDiagram[], predicate: (r: UserDiagram) => boolean): number {
    let current = 0;

    for (let i = records.length - 1; i >= 0; i--) {
      if (predicate(records[i])) {
        current++;
      } else {
        break;
      }
    }

    return current;
  }

  private emptyStats() {
    return {
      totalSolved: 0,
      correctlySolved: 0,
      solvedWithoutHints: 0,
      solvedWithoutMistakes: 0,
      longestNoHintsStreak: 0,
      longestNoMistakesStreak: 0,
      currentNoHintsStreak: 0,
      currentNoMistakesStreak: 0,
    };
  }
}
