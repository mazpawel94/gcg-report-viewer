import useGetFromCurrentState from '../../hooks/useGetFromCurrentState';
import { findBlanks, findPlayedMove } from '../../services/gameService';

const Statts = () => {
  const { moves } = useGetFromCurrentState();

  const info = moves.map((move) => {
    const playedMove = findPlayedMove(move);
    if (!playedMove) return {};
    return {
      nick: move.nick,
      movePoints: playedMove.movePoints,
      maxPoints: Math.max(...move.choiceOptions.map((opt) => opt.movePoints || 0)),
      maxPointsForBetterOptions: Math.max(
        ...move.choiceOptions.filter((opt) => opt.index <= playedMove.index).map((opt) => opt.movePoints),
      ),
      availableBingo: move.choiceOptions.some((opt) => opt.word.replaceAll(/\([^)]+\)/g, '').length === 7),
      numberOfPlayedTiles: playedMove.word.replaceAll(/\([^)]+\)/g, '').length,
      numberOfBlanks: findBlanks(playedMove.word).length,
    };
  });

  const result = info
    .filter(({ nick }) => nick === 'Paweł_Mazurek' || nick === 'Pawel_Mazurek' || nick === "PM")
    .reduce(
      (acc, curr) => {
        return {
          maxPoints: acc.maxPoints + curr.maxPoints,
          normalizeMaxPoints: acc.normalizeMaxPoints + curr.maxPointsForBetterOptions,
          sumPoints: acc.sumPoints + curr.movePoints,
          availableBingos: acc.availableBingos + curr.availableBingo,
          playedBingos: acc.playedBingos + (curr.numberOfPlayedTiles === 7 ? 1 : 0),
          numberOfPlayedTiles: acc.numberOfPlayedTiles + curr.numberOfPlayedTiles,
          numberOfBlanks: acc.numberOfBlanks + curr.numberOfBlanks,
        };
      },
      {
        maxPoints: 0,
        normalizeMaxPoints: 0,
        sumPoints: 0,
        availableBingos: 0,
        playedBingos: 0,
        numberOfPlayedTiles: 0,
        numberOfBlanks: 0,
      },
    );
  console.log(`belgijka: ${(result.sumPoints / result.maxPoints) * 100}%`);
  console.log(`belgijka rozsądna: ${(result.sumPoints / result.normalizeMaxPoints) * 100}%`);
  console.log(`blanki: ${result.numberOfBlanks}`);
  console.log(`ilość zagranych płytek: ${result.numberOfPlayedTiles}`);
  console.log(`ilość siódemek: ${result.playedBingos}`);
  console.log(`% siódemek: ${(result.playedBingos / result.availableBingos) * 100}%`);

  return null;
};

export default Statts;
