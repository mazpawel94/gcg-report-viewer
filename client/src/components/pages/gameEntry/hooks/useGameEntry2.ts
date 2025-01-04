import { useCallback, useRef, useState } from 'react';
import useRecognizeBoardState from './useRecognizeBoardState';

export enum EBoardFieldState {
  'empty',
  'suggestion',
  'changed',
  'sketch',
  'newMove',
  'done',
}

export enum EGameStatus {
  'initial',
  'suggestion',
  'filled',
  'done',
}

export interface IBOardField {
  index: number;
  x: number;
  y: number;
  letter: string | null;
  state: EBoardFieldState;
}

const initialBoardState: IBOardField[] = [...Array(15)]
  .map((_, y) =>
    [...Array(15)].map((_, x) => ({ x, y, index: y * 15 + x, letter: null, state: EBoardFieldState.empty })),
  )
  .flat();

const emptyFn = () => {};
const useGameEntry2 = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [boardState, setBoardState] = useState<IBOardField[]>(initialBoardState);
  const [gameStatus, setGameStatus] = useState<EGameStatus>(EGameStatus.initial);
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);

  const { postRequest } = useRecognizeBoardState();

  const handleBoardClick = useCallback(() => inputRef.current?.click(), [inputRef]);

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

  const changeLetter = useCallback(
    (newLetter: string) =>
      setBoardState((prev) =>
        prev.map((el) =>
          el.state === EBoardFieldState.changed ? { ...el, letter: newLetter, state: EBoardFieldState.suggestion } : el,
        ),
      ),
    [],
  );

  const handleInput = useCallback(async (e: any) => {
    const file = e.target.files[0];
    await postRequest(file, setBoardState);
    setGameStatus(EGameStatus.suggestion);
  }, []);

  const acceptBoard = useCallback(() => {
    setBoardState((prev) =>
      prev.map((el) => (el.state === EBoardFieldState.empty ? el : { ...el, state: EBoardFieldState.sketch })),
    );
    setGameStatus(EGameStatus.filled);
  }, []);

  const acceptMove = useCallback(() => {
    setBoardState((prev) =>
      prev.map((el) => (el.state === EBoardFieldState.newMove ? { ...el, state: EBoardFieldState.done } : el)),
    );
  }, []);

  const handleMouseDown = useCallback((e: MouseEvent) => {
    if (!(e.target instanceof HTMLElement)) return;
    if (e.target.nodeName === 'CANVAS') setIsMouseDown(true);
  }, []);
  const handleMouseUp = useCallback(() => setIsMouseDown(false), []);

  return {
    inputRef,
    boardState,
    gameStatus,
    handleInput,
    handleBoardFieldClick: gameStatus === EGameStatus.suggestion ? selectChangedTile : addTileToCurrentMove,
    handleMouseOver: gameStatus === EGameStatus.filled && isMouseDown ? addTileToCurrentMove : emptyFn,
    handleBoardClick,
    handleMouseDown,
    handleMouseUp,
    changeLetter,
    acceptBoard,
    acceptMove,
  };
};

export default useGameEntry2;
