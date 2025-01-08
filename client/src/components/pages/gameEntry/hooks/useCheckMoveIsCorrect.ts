import { useMemo } from 'react';
import { EBoardFieldState, EGameStatus, IBOardField } from './useGameEntry2';

const middleField = { x: 7, y: 7 };

const isInOneLine = (newTiles: IBOardField[], _: IBOardField[]) =>
  new Set(newTiles.map((el) => el.x)).size === 1 || new Set(newTiles.map((el) => el.y)).size === 1;

const isAdjacentToDoneField = (newTiles: IBOardField[], tilesOnBoard: IBOardField[]) =>
  newTiles.some((el) =>
    tilesOnBoard.some(
      (tile) =>
        (tile.x === el.x && (tile.y - 1 === el.y || tile.y + 1 === el.y)) ||
        (tile.y === el.y && (tile.x - 1 === el.x || tile.x + 1 === el.x)),
    ),
  );

const isWithoutGap = (newTiles: IBOardField[], tilesOnBoard: IBOardField[]) => {
  const isVertical = new Set(newTiles.map((el) => el.x)).size === 1;
  const sortedTiles = newTiles.sort((a, b) => (isVertical ? (a.y < b.y ? -1 : 1) : a.x < b.x ? -1 : 1));
  const start = sortedTiles[0];
  const end = sortedTiles[sortedTiles.length - 1];
  const fields = Array.from({ length: (isVertical ? end.y - start.y : end.x - start.x) + 1 }, (_, i) => ({
    x: isVertical ? start.x : start.x + i,
    y: isVertical ? start.y + i : start.y,
  }));
  return fields.every((el) => [...tilesOnBoard, ...newTiles].find((field) => field.x === el.x && field.y === el.y));
};

const conditions = [isInOneLine, isAdjacentToDoneField, isWithoutGap];

// później będzie brało dane z kontekstu i należało do osobnego komponentu
const useCheckMoveIsCorrect = (gameStatus: EGameStatus, boardState: IBOardField[]) => {
  const moveIsCorrect = useMemo(() => {
    if (gameStatus !== EGameStatus.filled) return false;
    const newTiles = boardState.filter((el) => el.state === EBoardFieldState.newMove);
    //first move
    if (!boardState.some((el) => el.state === EBoardFieldState.done))
      return newTiles.some((el) => el.x === middleField.x && el.y === middleField.y);
    const tilesOnBoard = boardState.filter((el) => el.state === EBoardFieldState.done);
    return conditions.every((condition) => condition(newTiles, tilesOnBoard));
  }, [gameStatus, boardState]);

  return { moveIsCorrect };
};

export default useCheckMoveIsCorrect;
