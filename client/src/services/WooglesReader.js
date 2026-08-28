import axios from 'axios';

import { backendUrl } from '../components/App';
import MacondoReader from './MacondoReader';

const extractGameId = (link) => {
  const trimmed = link.trim();
  const match = trimmed.match(/\/game\/([^/?#]+)/);
  return match ? match[1] : trimmed;
};

class WooglesReader {
  fetchGame = async (link) => {
    const gameId = extractGameId(link);
    if (!gameId) throw new Error('Nieprawidłowy link do partii');
    const { data } = await axios.get(`${backendUrl}/woogles/${gameId}`);
    return new MacondoReader().convert(data);
  };
}

export default WooglesReader;
