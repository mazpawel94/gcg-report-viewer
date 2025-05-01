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

  const { gameStatus, boardPhotoUrl, boardState, moveIsCorrect, txtFile } = useGameEntryContext();

  const { setBoardState, addApprovedMove, setIsExchangeMove, handleUndoMove } = useGameEntryActionsContext();

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
      if (tile.state === EBoardFieldState.empty) return;
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
  }, [newMoveInfo, addApprovedMove]);
  const handleExchange = useCallback(() => setIsExchangeMove(true), []);

  const handleMouseDown = useCallback((e: MouseEvent) => {
    if (!(e.target instanceof HTMLElement)) return;
    if (e.target.nodeName === 'CANVAS') setIsMouseDown(true);
  }, []);

  const handleDownload = useCallback(() => {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(txtFile));
    element.setAttribute('download', 'game.gcg');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }, [txtFile]);

  const handleMouseUp = useCallback(() => setIsMouseDown(false), []);

  return {
    boardPhotoUrl,
    boardState,
    gameStatus,
    moveIsCorrect,
    newMoveInfo,
    handleDownload,
    handleBoardFieldClick: gameStatus === EGameStatus.suggestion ? selectChangedTile : addTileToCurrentMove,
    handleMouseOver: gameStatus === EGameStatus.filled && isMouseDown ? addTileToCurrentMove : emptyFn,
    handleMouseDown,
    handleMouseUp,
    handlePass,
    handleExchange,
    undoMove: handleUndoMove,
  };
};

export default useGameEntry2;
