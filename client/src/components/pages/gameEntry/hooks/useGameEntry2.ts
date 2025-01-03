import React, { useCallback, useRef, useState } from 'react';
import useRecognizeBoardState from './useRecognizeBoardState';

export enum EBoardFieldState {
  'empty',
  'suggestion',
  'changed',
  'sketch',
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

const useGameEntry2 = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [boardState, setBoardState] = useState<IBOardField[]>(initialBoardState);

  const { postRequest } = useRecognizeBoardState();

  const handleBoardClick = useCallback(() => inputRef.current?.click(), [inputRef]);

  const selectChangedTile = useCallback((index: number) => {
    setBoardState((prev) =>
      prev.map((el) =>
        el.index !== index
          ? { ...el, state: el.state === EBoardFieldState.changed ? EBoardFieldState.suggestion : el.state }
          : { ...el, state: EBoardFieldState.changed },
      ),
    );
  }, []);

  const changeLetter = useCallback(
    (newLetter: string) =>
      setBoardState((prev) =>
        prev.map((el) =>
          el.state === EBoardFieldState.changed ? { ...el, letter: newLetter, state: EBoardFieldState.suggestion } : el,
        ),
      ),
    [],
  );
  const handleInput = useCallback((e: any) => {
    const file = e.target.files[0];
    postRequest(file, setBoardState);
  }, []);

  return { inputRef, boardState, handleInput, selectChangedTile, handleBoardClick, changeLetter };
};

export default useGameEntry2;
