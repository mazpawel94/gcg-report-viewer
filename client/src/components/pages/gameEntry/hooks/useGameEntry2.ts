import { useCallback, useState } from 'react';

import {
  EBoardFieldState,
  EGameStatus,
  useGameEntryActionsContext,
  useGameEntryContext,
} from '../../../../contexts/GameEntryContext';
import useNewMoveInfo from './useNewMoveInfo';

const emptyFn = () => {};
const useGameEntry2 = () => {
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);

  const { gameStatus, boardState, moveIsCorrect } = useGameEntryContext();

  const { setBoardState, addApprovedMove } = useGameEntryActionsContext();

  const newMoveInfo = useNewMoveInfo();

  const selectChangedTile = useCallback((e: Event, index: number) => {
    setBoardState((prev) =>
      prev.map((el) =>
        el.index !== index
          ? { ...el, state: el.state === EBoardFieldState.changed ? EBoardFieldState.suggestion : el.state }
          : { ...el, state: EBoardFieldState.changed },
      ),
    );
  }, []);

  const addTileToCurrentMove = useCallback(
    (e: Event, index: number) => {
      const tile = boardState.find((el) => el.index === index)!;
      if (tile.state === EBoardFieldState.newMove && e.type === 'mousedown')
        return setBoardState((prev) =>
          prev.map((el) => (el.index === index ? { ...el, state: EBoardFieldState.sketch } : el)),
        );
      const anotherTilesForNewMove = boardState.filter((el) => el.state === EBoardFieldState.newMove);
      if (!anotherTilesForNewMove.length || anotherTilesForNewMove.some((el) => el.x === tile.x || el.y === tile.y))
        setBoardState((prev) =>
          prev.map((el) =>
            el.index === index
              ? { ...el, state: el.state === EBoardFieldState.done ? el.state : EBoardFieldState.newMove }
              : el,
          ),
        );
    },
    [boardState],
  );

  const handlePass = useCallback(() => {
    addApprovedMove({ letters: newMoveInfo?.letters || 'A', points: 0, word: ' ', coordinates: '-' });
  }, [newMoveInfo]);

  const handleMouseDown = useCallback((e: MouseEvent) => {
    if (!(e.target instanceof HTMLElement)) return;
    if (e.target.nodeName === 'CANVAS') setIsMouseDown(true);
  }, []);

  const handleMouseUp = useCallback(() => setIsMouseDown(false), []);

  return {
    boardState,
    gameStatus,
    moveIsCorrect,
    newMoveInfo,
    handleBoardFieldClick: gameStatus === EGameStatus.suggestion ? selectChangedTile : addTileToCurrentMove,
    handleMouseOver: gameStatus === EGameStatus.filled && isMouseDown ? addTileToCurrentMove : emptyFn,
    handleMouseDown,
    handleMouseUp,
    handlePass,
  };
};

export default useGameEntry2;
