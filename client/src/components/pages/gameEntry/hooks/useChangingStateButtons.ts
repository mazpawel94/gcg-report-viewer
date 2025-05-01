import { useCallback, useEffect, useRef, useState } from 'react';

import {
  EBoardFieldState,
  EGameStatus,
  IApprovedMove,
  useGameEntryActionsContext,
  useGameEntryContext,
} from '../../../../contexts/GameEntryContext';
import useRecognizeBoardState from './useRecognizeBoardState';

const useChangingStateButtons = (newMoveInfo: IApprovedMove | null) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [defineBlankModalIsOpen, setDefineBlankModalIsOpen] = useState<boolean>(false);
  const { gameStatus, moveIsCorrect } = useGameEntryContext();

  const { addApprovedMove, setBoardPhotoUrl, setBoardState, setGameStatus } = useGameEntryActionsContext();

  const { postRequest } = useRecognizeBoardState();

  const handleInput = useCallback(async (e: any) => {
    const file = e.target.files[0];
    setBoardPhotoUrl(URL.createObjectURL(e.target.files[0]));
    await postRequest(file, setBoardState);
    setGameStatus(EGameStatus.suggestion);
  }, []);

  const handleNewPictureClick = useCallback(() => inputRef.current?.click(), [inputRef]);

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
    addApprovedMove(newMoveInfo!);
  }, [newMoveInfo, addApprovedMove]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (moveIsCorrect && (e.key === 'Enter' || e.key === ' ')) acceptMove();
    },
    [moveIsCorrect, acceptMove],
  );

  const showDefineBlankModal = useCallback(() => setDefineBlankModalIsOpen(true), []);

  const replaceBlanks = useCallback(
    (definedBlanks: string[]) => {
      const localNewMoveInfo = newMoveInfo;
      definedBlanks.forEach(
        (letter) => (localNewMoveInfo!.word = localNewMoveInfo!.word.replace('?', letter.toLocaleLowerCase())),
      );
      addApprovedMove(localNewMoveInfo!);
      setBoardState((prev) =>
        prev.map((el) => (el.state === EBoardFieldState.newMove ? { ...el, state: EBoardFieldState.done } : el)),
      );
      setDefineBlankModalIsOpen(false);
    },
    [newMoveInfo, addApprovedMove],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return {
    inputRef,
    defineBlankModalIsOpen,
    gameStatus,
    moveIsCorrect,
    handleInput,
    handleNewPictureClick,
    acceptBoard,
    acceptMove: newMoveInfo?.letters.includes('?') ? showDefineBlankModal : acceptMove,
    replaceBlanks,
  };
};

export default useChangingStateButtons;
