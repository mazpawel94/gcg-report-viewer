import { backendUrl } from '../components/App';
import { findPlayedMove, findBestMove } from '../services/gameService';
import useGetFromCurrentState from './useGetFromCurrentState';

const fitToBackendFormat = (move) => ({
  coordinates: move.coordinates.replace('*', ''),
  word: move.word.replace(/\(([^)]*)\)/g, (match, group) => '.'.repeat(group.length)),
});

const compressMovesList = (moves) =>
  moves
    .map((move) => findPlayedMove(move))
    .map((move) => fitToBackendFormat(move))
    .filter((move) => move.coordinates !== 'xch');

const useAddDiagramToBase = () => {
  const { currentMoves, actualMove } = useGetFromCurrentState();
  const addDiagramCallback = async (diagramIsPublic, tags) => {
    const id = await fetch(`${backendUrl}/diagram`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        diagramIsPublic,
        letters: actualMove.letters,
        words: JSON.stringify(compressMovesList(currentMoves)),
        solution: JSON.stringify(fitToBackendFormat(findBestMove(actualMove))),
        tags,
      }),
    }).then((res) => res.text());
    return id;
  };

  return { addDiagramCallback };
};

export default useAddDiagramToBase;
