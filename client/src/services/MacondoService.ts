import axios from 'axios';

class MacondoService {
  static async analyzeMove(rack: string, playedMove: string, withFullAnalysis: boolean) {
    const res = await axios({
      method: 'post',
      url: withFullAnalysis ? `/api/analyze` : `/api/analyze/simple`,
      data: { rack, playedMove },
    });
    return res;
  }
}

export default MacondoService;
