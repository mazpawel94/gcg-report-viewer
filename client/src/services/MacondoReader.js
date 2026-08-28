import { setPosition } from './gameService';
import { findFreeLetters } from './moveHelpers';

const BOARD_SIZE = 15;

const createEmptyBoard = () => Array.from({ length: BOARD_SIZE }, () => Array(BOARD_SIZE).fill(null));

// Macondo move descriptions look like "8F PŁON", "(exch ĆJNSTW)" or "(pass)".
// A '.' inside the word marks a tile already on the board (not part of the rack).
const parseMoveDescription = (description) => {
  const trimmed = description.trim();
  const exchangeMatch = trimmed.match(/^\(exch\s*(.*)\)$/i);
  if (exchangeMatch) return { type: 'exch', coordinates: 'xch', rawWord: exchangeMatch[1].trim() };
  if (/^\(pass\)$/i.test(trimmed)) return { type: 'pass', coordinates: 'pass', rawWord: '' };
  const spaceIndex = trimmed.indexOf(' ');
  return { type: 'play', coordinates: trimmed.slice(0, spaceIndex), rawWord: trimmed.slice(spaceIndex + 1) };
};

// Rewrites '.' placeholders into GcgReader's "(letter)" notation for tiles already on the board.
const expandThroughTiles = (rawWord, coordinates, board) => {
  const { x, y, verticle } = setPosition(coordinates);
  let cx = x;
  let cy = y;
  let word = '';
  for (const char of rawWord) {
    word += char === '.' ? `(${board[cy]?.[cx] ?? '?'})` : char;
    if (verticle) cy += 1;
    else cx += 1;
  }
  return word;
};

const applyToBoard = (rawWord, coordinates, board) => {
  const { x, y, verticle } = setPosition(coordinates);
  let cx = x;
  let cy = y;
  for (const char of rawWord) {
    if (char !== '.' && board[cy]) board[cy][cx] = char;
    if (verticle) cy += 1;
    else cx += 1;
  }
};

class MacondoReader {
  buildChoiceOptions = (turn, board) => {
    const bestEquity = Math.max(...turn.top_sim_plays.map((candidate) => candidate.equity));
    return turn.top_sim_plays.map((candidate, i) => {
      const parsed = parseMoveDescription(candidate.move_description);
      const word = parsed.type === 'play' ? expandThroughTiles(parsed.rawWord, parsed.coordinates, board) : parsed.rawWord;
      const coordinates = candidate.is_played_move ? `*${parsed.coordinates}` : parsed.coordinates;
      const isBest = candidate.equity === bestEquity;
      return {
        index: i,
        evaluate: isBest ? 'best' : (bestEquity - candidate.equity).toFixed(2),
        coordinates,
        word,
        movePoints: candidate.score,
        percent: `${(candidate.win_prob * 100).toFixed(2)}%`,
        freeLetters: findFreeLetters(word, turn.rack),
      };
    });
  };

  // Older reports can omit the played move from top_sim_plays when it wasn't a considered candidate.
  ensurePlayedOptionPresent = (choiceOptions, turn, board) => {
    if (choiceOptions.some((option) => option.coordinates.startsWith('*'))) return choiceOptions;
    const parsed = parseMoveDescription(turn.played_move);
    const word = parsed.type === 'play' ? expandThroughTiles(parsed.rawWord, parsed.coordinates, board) : parsed.rawWord;
    return [
      ...choiceOptions,
      {
        index: choiceOptions.length,
        evaluate: '',
        coordinates: `*${parsed.coordinates}`,
        word,
        movePoints: turn.played_score,
        percent: '',
        freeLetters: findFreeLetters(word, turn.rack),
      },
    ];
  };

  convert = (data) => {
    const board = createEmptyBoard();
    const scoreBeforeByPlayer = {};
    const movesArray = [];

    data.turns.forEach((turn) => {
      const pointsBefore = scoreBeforeByPlayer[turn.player_index] || 0;
      let choiceOptions = this.buildChoiceOptions(turn, board);
      choiceOptions = this.ensurePlayedOptionPresent(choiceOptions, turn, board);

      movesArray.push({
        index: movesArray.length,
        nick: turn.player_name,
        letters: turn.rack,
        pointsBefore,
        move: turn.played_move,
        choiceOptions,
      });

      const playedParsed = parseMoveDescription(turn.played_move);
      if (playedParsed.type === 'play') applyToBoard(playedParsed.rawWord, playedParsed.coordinates, board);
      scoreBeforeByPlayer[turn.player_index] = pointsBefore + turn.played_score;
    });

    return movesArray;
  };

  readReport = (e, callback) => {
    const file = e.target.files[0];
    if (!file) return 0;
    const reader = new FileReader();
    reader.onload = (e) => callback(this.convert(JSON.parse(e.target.result)));
    reader.readAsText(file);
  };
}

export default MacondoReader;
