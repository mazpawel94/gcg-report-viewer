import styled from 'styled-components';
import StyledButton from '../../atoms/Button';
import { useGameEntryActionsContext, useGameEntryContext } from '../../../contexts/GameEntryContext';
import { useRef } from 'react';
import { StyledWrapper } from './LettersPanel';

const ExchangeLettersModal = () => {
  const inputRef = useRef<HTMLInputElement>(null!);

  const { isExchangeMove } = useGameEntryContext();

  const { addExchangeMove } = useGameEntryActionsContext();

  const handleClick = () => addExchangeMove(inputRef.current.value);

  const preventBlur = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
  };

  if (!isExchangeMove) return null;

  return (
    <StyledWrapper>
      <input ref={inputRef} autoFocus onPointerUp={preventBlur} />
      <StyledButton onClick={handleClick}>Zapisz</StyledButton>
    </StyledWrapper>
  );
};

export default ExchangeLettersModal;
