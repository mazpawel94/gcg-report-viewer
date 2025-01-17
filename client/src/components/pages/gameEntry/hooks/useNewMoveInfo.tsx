import { useMemo } from 'react';

import {
  EBoardFieldState,
  IApprovedMove,
  IBOardField,
  useGameEntryContext,
} from '../../../../contexts/GameEntryContext';
import { letter2Indexes, letter3Indexes, POINTS, wordMultiplerByIndex } from '../../../globalVariables';
import { convertToBoardCoordinates } from '../../../../services/gameService';

type LetterKey = keyof typeof POINTS;

const findLetterPoint = (tile: IBOardField) => {
  const basicValue = POINTS[tile.letter as LetterKey];
  if (letter2Indexes.includes(tile.index)) return basicValue * 2;
  if (letter3Indexes.includes(tile.index)) return basicValue * 3;
  return basicValue;
};

const findTilesOnBoardForWord = (boardSlice: IBOardField[], startIndex: number, key: 'x' | 'y') => {
  const tilesOnBoard = [];
  let localStartIndex = startIndex;
  let localEndIndex = startIndex;
  while (localStartIndex > 0) {
    const checkedField = boardSlice.find((el) => el[key] === localStartIndex - 1);
    if (checkedField?.state === EBoardFieldState.done) {
      tilesOnBoard.push(checkedField);
      localStartIndex--;
    } else if (checkedField?.state === EBoardFieldState.newMove) localStartIndex--;
    else localStartIndex = -1;
  }
  while (localEndIndex < 14) {
    const checkedField = boardSlice.find((el) => el[key] === localEndIndex + 1);
    if (checkedField?.state === EBoardFieldState.done) {
      tilesOnBoard.push(checkedField);
      localEndIndex++;
    } else if (checkedField?.state === EBoardFieldState.newMove) localEndIndex++;
    else localEndIndex = 15;
  }
  return tilesOnBoard;
};

const useNewMoveInfo = () => {
  const { moveIsCorrect, boardState } = useGameEntryContext();

  const newMoveInfo: IApprovedMove | null = useMemo(() => {
    if (!moveIsCorrect) return null;

    const newTiles = boardState.filter((el) => el.state === EBoardFieldState.newMove);

    const isVertical = new Set(newTiles.map((el) => el.x)).size === 1;
    const [key, perpendicularKey] = isVertical ? ['x' as const, 'y' as const] : ['y' as const, 'x' as const];

    const perpendicularWords = newTiles
      .map((tile) => {
        const boardSlice = boardState.filter((el) => el[perpendicularKey] === tile[perpendicularKey]);
        const tilesOnBoard = findTilesOnBoardForWord(boardSlice, tile[key], key);
        if (!tilesOnBoard.length) return null;
        return {
          points:
            (findLetterPoint(tile) + tilesOnBoard.reduce((acc, curr) => acc + POINTS[curr.letter as LetterKey], 0)) *
            wordMultiplerByIndex[tile.index],
          tilesOnBoard,
        };
      })
      .filter((el) => el !== null);
    const perpendicularPoints = perpendicularWords.reduce((acc, curr) => acc + curr!.points, 0);

    const mainMoveSlice = boardState.filter((el) => el[key] === newTiles[0][key]);
    const tilesOnBoard = findTilesOnBoardForWord(mainMoveSlice, newTiles[0][perpendicularKey], perpendicularKey);
    const sortedTiles = [...newTiles, ...tilesOnBoard].sort((a, b) =>
      a[perpendicularKey] < b[perpendicularKey] ? -1 : 1,
    );
    const wordForQuackle = sortedTiles.map((el) => (el.state === EBoardFieldState.newMove ? el.letter : '.')).join('');

    const mainMovePoints =
      (newTiles.reduce((acc, curr) => acc + findLetterPoint(curr), 0) +
        tilesOnBoard.reduce((acc, curr) => acc + POINTS[curr.letter as LetterKey], 0)) *
      newTiles.reduce((acc, curr) => acc * wordMultiplerByIndex[curr.index], 1);

    return {
      points:
        newTiles.length === 1 && !tilesOnBoard.length
          ? perpendicularPoints
          : mainMovePoints + perpendicularPoints + (newTiles.length === 7 ? 50 : 0),
      word: wordForQuackle,
      coordinates: convertToBoardCoordinates({ x: sortedTiles[0].x, y: sortedTiles[0].y, vertical: isVertical }),
      letters: wordForQuackle.replaceAll('.', ''),
    };
  }, [moveIsCorrect, boardState]);

  return newMoveInfo;
};

export default useNewMoveInfo;
