import { useState, useCallback, useRef, useEffect, useMemo } from 'react';
import { IApprovedMove, IBOardField } from '../contexts/GameEntryContext';
import MacondoService from '../services/MacondoService';

type analysisStatus = 'initial' | 'pending' | 'done';

interface IMoveToAnalyze {
  move: IApprovedMove;
  moveIndex: number;
  status: analysisStatus;
  result?: any;
}

export const useAnalyzeQueue = (boardState: IBOardField[], playersName: string[]) => {
  const [movesToAnalyze, setMovesToAnalyze] = useState<IMoveToAnalyze[]>([]);

  const addToQueue = useCallback((move: IApprovedMove) => {
    setMovesToAnalyze((prev) => [...prev, { move, status: 'initial', moveIndex: move.index! }]);
  }, []);

  useEffect(() => {
    if (movesToAnalyze.some((item) => item.status === 'pending')) return;

    const processNext = async () => {
      const nextMove = movesToAnalyze.find((el) => el.status === 'initial');
      console.log('procesuję następny ruch z kolejki ', nextMove);
      if (!nextMove) return;
      setMovesToAnalyze((prev) =>
        prev.map((el) => (el.moveIndex === nextMove.moveIndex ? { ...el, status: 'pending' } : el)),
      );
      try {
        const withFullAnalysis =
          nextMove.move.letters.length === 7 || boardState.filter((field) => field.state === 5).length >= 80;
        const response = await MacondoService.analyzeMove(
          nextMove.move.letters,
          `${nextMove.move.coordinates} ${nextMove.move.word}`,
          withFullAnalysis,
        );
        console.log('%cclient\src\hooks.ts:47 response', 'color: #007acc;', nextMove.moveIndex, response);
        setMovesToAnalyze((prev) =>
          prev.map((el) =>
            el.moveIndex === nextMove.moveIndex ? { ...el, status: 'done', result: response.data.bestMoves } : el,
          ),
        );
      } catch (error) {
        console.error('[QUEUE] Error processing move:', error);
      }
    };
    processNext();
  }, [movesToAnalyze, boardState]);

  const txtFile = useMemo(() => {
    if (movesToAnalyze.length < 10) return '';
    movesToAnalyze.map((el, i) => ({ player: playersName[i % 2], ...el.move, options: el.result?.join('\r\n') }));
    const rows = movesToAnalyze
      .map((el, i) => ({ player: playersName[i % 2], ...el.move, options: el.result?.join('\r\n') }))
      .map((el, i) => `>${el.player}: ${el.letters} ${el.coordinates} ${el.word} ${el.points} \r\n${el.options}`);
    return `#character-encoding UTF-8
  #player1 ${playersName[0]} ${playersName[0]}
  #player2 ${playersName[1]} ${playersName[1]}
  ${rows.join('\r\n')}`;
  }, [movesToAnalyze, playersName]);

  console.log('%cclient\src\hooks\.ts:88 movesToAnalyze', 'color: #007acc;', movesToAnalyze);
  console.log('%cclient\src\hooks\.ts:88 txtFile', 'color: #007acc;', txtFile);

  return { addToQueue };
};
