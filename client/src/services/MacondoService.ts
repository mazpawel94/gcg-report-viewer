import axios from 'axios';
import { backendUrl } from '../components/App';

class MacondoService {
  static async analyzeMove(rack: string, playedMove: string, withFullAnalysis: boolean) {
    console.log({rack, playedMove, withFullAnalysis});
    const res = await axios({
      method: 'post',
      url: withFullAnalysis ? `${backendUrl}/analyze` : `${backendUrl}/analyze/simple`,
      data: { rack, playedMove },
    });
    return res;
  }
}

export default MacondoService;
