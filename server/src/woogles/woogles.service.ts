import { Injectable, NotFoundException } from '@nestjs/common';
import axios from 'axios';

const GCG_URL = 'https://woogles.io/api/analysis_service.AnalysisService/GetAnalysisResult';
@Injectable()
export class WooglesService {
  async getGame(gameId: string): Promise<{ turns: unknown[] }> {
    const { data } = await axios.post(GCG_URL, { gameId });

    if (!data?.found || !data?.result?.turns) {
      throw new NotFoundException('Nie znaleziono partii na woogles.io');
    }

    return data.result;
  }
}
