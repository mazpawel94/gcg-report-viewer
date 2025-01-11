import { createContext, useCallback, useContext, useMemo, useState } from 'react';

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

interface IGameEntryContext {
  gameStatus: EGameStatus;
  boardState: IBOardField[];
}

interface IGameEntryActionsContext {
  setBoardState: React.Dispatch<React.SetStateAction<IBOardField[]>>;
  setGameStatus: React.Dispatch<React.SetStateAction<EGameStatus>>;
  changeLetter: (letter: string) => void;
}

export const GameEntryContext = createContext<IGameEntryContext>({
  gameStatus: EGameStatus.initial,
  boardState: initialBoardState,
});

export const GameEntryActionsContext = createContext<IGameEntryActionsContext>({
  setBoardState: () => {},
  setGameStatus: () => {},
  changeLetter: () => {},
});

export const useGameEntryContext = () => useContext(GameEntryContext);

export const useGameEntryActionsContext = () => useContext(GameEntryActionsContext);

export const GameEntryContextProvider = ({ children }: any) => {
  const [boardState, setBoardState] = useState<IBOardField[]>(initialBoardState);
  const [gameStatus, setGameStatus] = useState<EGameStatus>(EGameStatus.initial);

  const changeLetter = useCallback(
    (newLetter: string) =>
      setBoardState((prev) =>
        prev.map((el) =>
          el.state === EBoardFieldState.changed ? { ...el, letter: newLetter, state: EBoardFieldState.suggestion } : el,
        ),
      ),
    [],
  );

  const actions = useMemo(
    () => ({
      setBoardState,
      setGameStatus,
      changeLetter,
    }),
    [],
  );

  const values = {
    boardState,
    gameStatus,
  };

  return (
    <GameEntryContext.Provider value={values}>
      <GameEntryActionsContext.Provider value={actions}>{children}</GameEntryActionsContext.Provider>
    </GameEntryContext.Provider>
  );
};
