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
  sumPoints?: number;
  isLose?: boolean;
}

const initialBoardState: IBOardField[] = [...Array(15)]
  .map((_, y) =>
    [...Array(15)].map((_, x) => ({ x, y, index: y * 15 + x, letter: null, state: EBoardFieldState.empty })),
  )
  .flat();

interface IGameEntryContext {
  approvedMoves: IApprovedMove[];
  boardState: IBOardField[];
  gameStatus: EGameStatus;
  currentRack: string;
  moveIsCorrect: boolean;
}

interface IGameEntryActionsContext {
  addApprovedMove: (newMove: IApprovedMove) => void;
  changeLetter: (letter: string) => void;
  setBoardState: React.Dispatch<React.SetStateAction<IBOardField[]>>;
  setCurrentRack: React.Dispatch<React.SetStateAction<string>>;
  setGameStatus: React.Dispatch<React.SetStateAction<EGameStatus>>;
}

export const GameEntryContext = createContext<IGameEntryContext>({
  approvedMoves: [],
  boardState: initialBoardState,
  currentRack: '',
  gameStatus: EGameStatus.initial,
  moveIsCorrect: false,
});

export const GameEntryActionsContext = createContext<IGameEntryActionsContext>({
  addApprovedMove: () => {},
  changeLetter: () => {},
  setBoardState: () => {},
  setGameStatus: () => {},
  setCurrentRack: () => {},
});

export const useGameEntryContext = () => useContext(GameEntryContext);

export const useGameEntryActionsContext = () => useContext(GameEntryActionsContext);

export const GameEntryContextProvider = ({ children }: any) => {
  const [boardState, setBoardState] = useState<IBOardField[]>(initialBoardState);
  const [gameStatus, setGameStatus] = useState<EGameStatus>(EGameStatus.initial);
  const [approvedMoves, setApprovedMoves] = useState<IApprovedMove[]>([]);
  const [playersName, setPlayersName] = useState<string[]>(['gracz_1', 'gracz_2']);
  const [currentRack, setCurrentRack] = useState<string>('');
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

  const addApprovedMove = useCallback(
    (newMove: IApprovedMove) => {
      setApprovedMoves((prev) => [
        ...prev,
        {
          ...newMove,
          index: prev.length,
          letters: currentRack.toUpperCase() || newMove.letters,
          sumPoints: prev.length >= 2 ? prev[prev.length - 2].sumPoints! + newMove.points : newMove.points,
        },
      ]);
      setCurrentRack('');
    },
    [currentRack],
  );

  const txtFile = useMemo(() => {
    const rows = approvedMoves.map(
      (el, i) => `>${playersName[i % 2]}: ${el.letters} ${el.coordinates} ${el.word} ${el.points} ${el.sumPoints} `,
    );
    return `
    #character-encoding UTF-8
    #player1 ${playersName[0]} ${playersName[0]}
    #player2 ${playersName[1]} ${playersName[1]}
    ${rows.join('\r\n')}`;
  }, [approvedMoves, playersName]);

  console.log({ txtFile, approvedMoves });
  const actions = useMemo(
    () => ({
      addApprovedMove,
      changeLetter,
      setBoardState,
      setCurrentRack,
      setGameStatus,
    }),
    [addApprovedMove],
  );

  const values = {
    approvedMoves,
    boardState,
    currentRack,
    gameStatus,
    moveIsCorrect,
  };

  return (
    <GameEntryContext.Provider value={values}>
      <GameEntryActionsContext.Provider value={actions}>{children}</GameEntryActionsContext.Provider>
    </GameEntryContext.Provider>
  );
};
