import { useEffect, useRef } from 'react';
import { IApprovedMove, useGameEntryActionsContext, useGameEntryContext } from '../../../contexts/GameEntryContext';

const CurrentMoveRack = ({ newMoveInfo }: { newMoveInfo: IApprovedMove | null }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { currentRack } = useGameEntryContext();

  const { setCurrentRack } = useGameEntryActionsContext();

  const handleInput = (e: any) => {
    if (e.target.value.length < (newMoveInfo?.letters || []).length) return;
    setCurrentRack(e.target.value);
  };

  const focusOnInput = () => inputRef.current?.focus();

  useEffect(() => document.addEventListener('pointerup', focusOnInput), []);

  return <input ref={inputRef} autoFocus onChange={handleInput} value={currentRack || newMoveInfo?.letters || ''} />;
};

export default CurrentMoveRack;
