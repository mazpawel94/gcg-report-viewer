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

    return {
      totalSolved,
      correctlySolved,
      solvedWithoutHints,
      solvedWithoutMistakes,
      longestNoHintsStreak,
      longestNoMistakesStreak,
    };
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

  private emptyStats() {
    return {
      totalSolved: 0,
      correctlySolved: 0,
      solvedWithoutHints: 0,
      solvedWithoutMistakes: 0,
      longestNoHintsStreak: 0,
      longestNoMistakesStreak: 0,
    };
  }
}
