import { createContext, useCallback, useContext, useMemo, useState } from 'react';

import useCheckMoveIsCorrect from '../components/pages/gameEntry/hooks/useCheckMoveIsCorrect';
import { useAnalyzeQueue } from '../hooks/useAnalyzeQueue';

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

interface IBOardFieldSnapshot {
  index: number;
  boardState: IBOardField[];
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

const findRackLetters = (lastPlayerMove: IApprovedMove) => {
  const playedTiles = lastPlayerMove.word
    .replaceAll('.', '')
    .replaceAll(/[a-ząćęłńóśźż]/g, '?')
    .split('');
  const currentTiles = playedTiles.reduce((acc, curr) => acc.replace(curr, ''), lastPlayerMove.letters);
  return currentTiles;
};

const initialBoardState: IBOardField[] = [...Array(15)]
  .map((_, y) =>
    [...Array(15)].map((_, x) => ({ x, y, index: y * 15 + x, letter: null, state: EBoardFieldState.empty })),
  )
  .flat();

interface IGameEntryContext {
  approvedMoves: IApprovedMove[];
  boardPhotoUrl: string;
  boardState: IBOardField[];
  gameStatus: EGameStatus;
  currentRack: string;
  isExchangeMove: boolean;
  moveIsCorrect: boolean;
  playersName: string[];
  selectingPolishLetter: string | null;
  txtFile: string;
}

interface IGameEntryActionsContext {
  addApprovedMove: (newMove: IApprovedMove) => void;
  addExchangeMove: (letters: string | number) => void;
  changeLetter: (letter: string) => void;
  handleUndoMove: () => void;
  setBoardPhotoUrl: React.Dispatch<React.SetStateAction<string>>;
  setBoardState: React.Dispatch<React.SetStateAction<IBOardField[]>>;
  setCurrentRack: React.Dispatch<React.SetStateAction<string>>;
  setGameStatus: React.Dispatch<React.SetStateAction<EGameStatus>>;
  setIsExchangeMove: React.Dispatch<React.SetStateAction<boolean>>;
  setPlayersName: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectingPolishLetter: React.Dispatch<React.SetStateAction<string | null>>;
}

export const GameEntryContext = createContext<IGameEntryContext>({
  approvedMoves: [],
  boardPhotoUrl: null!,
  boardState: initialBoardState,
  currentRack: '',
  gameStatus: EGameStatus.initial,
  isExchangeMove: false,
  moveIsCorrect: false,
  playersName: ['gracz_1', 'gracz_2'],
  selectingPolishLetter: null,
  txtFile: '',
});

export const GameEntryActionsContext = createContext<IGameEntryActionsContext>({
  addApprovedMove: () => {},
  addExchangeMove: () => {},
  changeLetter: () => {},
  handleUndoMove: () => {},
  setBoardPhotoUrl: () => {},
  setBoardState: () => {},
  setCurrentRack: () => {},
  setGameStatus: () => {},
  setIsExchangeMove: () => {},
  setPlayersName: () => {},
  setSelectingPolishLetter: () => {},
});

export const useGameEntryContext = () => useContext(GameEntryContext);

export const useGameEntryActionsContext = () => useContext(GameEntryActionsContext);

export const GameEntryContextProvider = ({ children }: any) => {
  const [boardPhotoUrl, setBoardPhotoUrl] = useState<string>(null!);
  const [boardState, setBoardState] = useState<IBOardField[]>(initialBoardState);
  const [boardStateSnapshots, setBoardStateSnapshots] = useState<IBOardFieldSnapshot[]>([]);
  const [gameStatus, setGameStatus] = useState<EGameStatus>(EGameStatus.initial);
  const [approvedMoves, setApprovedMoves] = useState<IApprovedMove[]>([]);
  const [playersName, setPlayersName] = useState<string[]>(['gracz_1', 'gracz_2']);
  const [isExchangeMove, setIsExchangeMove] = useState<boolean>(false);
  const [currentRack, setCurrentRack] = useState<string>('');
  const [selectingPolishLetter, setSelectingPolishLetter] = useState<string | null>(null);

  const { moveIsCorrect } = useCheckMoveIsCorrect(gameStatus, boardState);
  const { addToQueue } = useAnalyzeQueue(boardState, playersName);

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
      setBoardStateSnapshots((prev) => [...prev, { index: approvedMoves.length, boardState }]);
      addToQueue({ ...newMove, index: approvedMoves.length, letters: currentRack.toUpperCase() || newMove.letters });
      setApprovedMoves((prev) => [
        ...prev,
        {
          ...newMove,
          index: prev.length,
          letters: currentRack.toUpperCase() || newMove.letters,
          sumPoints: prev.length >= 2 ? prev[prev.length - 2].sumPoints! + newMove.points : newMove.points,
        },
      ]);
      setCurrentRack(approvedMoves.length > 0 ? findRackLetters(approvedMoves[approvedMoves.length - 1]) : '');
    },
    [boardState, approvedMoves, currentRack, addToQueue],
  );

  const handleUndoMove = useCallback(() => {
    if (!boardStateSnapshots.length) return;
    setBoardState(boardStateSnapshots[boardStateSnapshots.length - 1].boardState);
    setBoardStateSnapshots((prev) => prev.slice(0, prev.length - 1));
    setCurrentRack(approvedMoves[approvedMoves.length - 1].letters || '');
    setApprovedMoves((prev) => prev.slice(0, prev.length - 1));
  }, [boardStateSnapshots, approvedMoves]);

  const addExchangeMove = useCallback(
    (exchangedLetters: string | number) => {
      const exchanged = (exchangedLetters as string).toUpperCase();
      const letters = currentRack.length ? currentRack.toUpperCase() : exchanged;
      addToQueue({ coordinates: 'exchange', index: approvedMoves.length, letters, points: 0, word: exchanged });

      setApprovedMoves((prev) => [
        ...prev,
        {
          word: `-${exchanged}`,
          coordinates: ' ',
          index: prev.length,
          letters: currentRack.length ? currentRack.toUpperCase() : exchanged,
          points: 0,
          sumPoints: prev.length >= 2 ? prev[prev.length - 2].sumPoints! : 0,
        },
      ]);
      setCurrentRack('');
      setIsExchangeMove(false);
    },
    [currentRack],
  );

  const txtFile = useMemo(() => {
    const rows = approvedMoves
      .flatMap((el) => (el.coordinates === '--' ? [el, el] : el)) // duplikuje ruchy straty, zgodnie z formatem gcg
      .map(
        (el, i) => `>${playersName[i % 2]}: ${el.letters} ${el.coordinates} ${el.word} ${el.points} ${el.sumPoints} `,
      );
    return `#character-encoding UTF-8
#player1 ${playersName[0]} ${playersName[0]}
#player2 ${playersName[1]} ${playersName[1]}
${rows.join('\r\n')}`;
  }, [approvedMoves, playersName]);

  const actions = useMemo(
    () => ({
      addApprovedMove,
      addExchangeMove,
      changeLetter,
      handleUndoMove,
      setBoardPhotoUrl,
      setBoardState,
      setCurrentRack,
      setGameStatus,
      setIsExchangeMove,
      setPlayersName,
      setSelectingPolishLetter,
    }),
    [addApprovedMove],
  );

  const values = {
    approvedMoves,
    boardPhotoUrl,
    boardState,
    currentRack,
    gameStatus,
    isExchangeMove,
    moveIsCorrect,
    playersName,
    selectingPolishLetter,
    txtFile,
  };

  return (
    <GameEntryContext.Provider value={values}>
      <GameEntryActionsContext.Provider value={actions}>{children}</GameEntryActionsContext.Provider>
    </GameEntryContext.Provider>
  );
};
