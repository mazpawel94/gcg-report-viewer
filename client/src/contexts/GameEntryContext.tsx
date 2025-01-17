import { createContext, useCallback, useContext, useMemo, useState } from 'react';

import useCheckMoveIsCorrect from '../components/pages/gameEntry/hooks/useCheckMoveIsCorrect';

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

export interface IApprovedMove {
  index?: number;
  points: number;
  word: string;
  coordinates: string;
  letters: string;
}

const initialBoardState: IBOardField[] = [...Array(15)]
  .map((_, y) =>
    [...Array(15)].map((_, x) => ({ x, y, index: y * 15 + x, letter: null, state: EBoardFieldState.empty })),
  )
  .flat();

interface IGameEntryContext {
  gameStatus: EGameStatus;
  boardState: IBOardField[];
  moveIsCorrect: boolean;
}

interface IGameEntryActionsContext {
  setBoardState: React.Dispatch<React.SetStateAction<IBOardField[]>>;
  setGameStatus: React.Dispatch<React.SetStateAction<EGameStatus>>;
  addApprovedMove: (newMove: IApprovedMove) => void;
  changeLetter: (letter: string) => void;
}

export const GameEntryContext = createContext<IGameEntryContext>({
  gameStatus: EGameStatus.initial,
  boardState: initialBoardState,
  moveIsCorrect: false,
});

export const GameEntryActionsContext = createContext<IGameEntryActionsContext>({
  addApprovedMove: () => {},
  setBoardState: () => {},
  setGameStatus: () => {},
  changeLetter: () => {},
});

export const useGameEntryContext = () => useContext(GameEntryContext);

export const useGameEntryActionsContext = () => useContext(GameEntryActionsContext);

export const GameEntryContextProvider = ({ children }: any) => {
  const [boardState, setBoardState] = useState<IBOardField[]>(initialBoardState);
  const [gameStatus, setGameStatus] = useState<EGameStatus>(EGameStatus.initial);
  const [approvedMoves, setApprovedMoves] = useState<IApprovedMove[]>([]);

  const { moveIsCorrect } = useCheckMoveIsCorrect(gameStatus, boardState);

  const changeLetter = useCallback(
    (newLetter: string) =>
      setBoardState((prev) =>
        prev.map((el) =>
          el.state === EBoardFieldState.changed ? { ...el, letter: newLetter, state: EBoardFieldState.suggestion } : el,
        ),
      ),
    [],
  );

  const addApprovedMove = useCallback((newMove: IApprovedMove) => {
    setApprovedMoves((prev) => [...prev, { ...newMove, index: prev.length }]);
  }, []);

  const actions = useMemo(
    () => ({
      addApprovedMove,
      setBoardState,
      setGameStatus,
      changeLetter,
    }),
    [],
  );

  const values = {
    approvedMoves,
    boardState,
    gameStatus,
    moveIsCorrect,
  };

  return (
    <GameEntryContext.Provider value={values}>
      <GameEntryActionsContext.Provider value={actions}>{children}</GameEntryActionsContext.Provider>
    </GameEntryContext.Provider>
  );
};
