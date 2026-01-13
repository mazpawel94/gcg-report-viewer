import { useMemo } from 'react';
import styled from 'styled-components';

import { EGameStatus, useGameEntryActionsContext, useGameEntryContext } from '../../../contexts/GameEntryContext';

const StyledWrapper = styled.div`
  margin-top: 5px;
  width: 40px;
  display: flex;
  flex-direction: column;
  background: #08763b;
  gap: 5px;
  align-items: center;
  justify-content: center;
  height: auto;
  align-self: self-start;
  padding: 10px;
`;

const Letter = styled.div<{ isOnBoard: boolean }>`
  background: ${({ isOnBoard }) => (isOnBoard ? '#f8e8c7' : 'red')};
  color: ${({ isOnBoard }) => (isOnBoard ? '#015b52' : 'white')};
  cursor: ${({ isOnBoard }) => (isOnBoard ? 'initial' : 'pointer')};
  font-size: 15px;
  text-align: center;
  width: 25px;
  height: 25px;
  border-radius: 4px;
  user-select: none;
`;

const letters = 'ĄĆĘŁŁŃÓŚŹŻ'.split('');

const PolishLettersInfo = () => {
  const { boardState, gameStatus } = useGameEntryContext();
  const { setSelectingPolishLetter } = useGameEntryActionsContext();

  const lettersOnBoard = useMemo(() => boardState.map((el) => el.letter), [boardState]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>, letter: string) => {
    e.preventDefault();
    setSelectingPolishLetter(letter);
  };

  if (gameStatus !== EGameStatus.suggestion) return null;

  return (
    <StyledWrapper>
      {letters.map((letter, index) => (
        <Letter
          onMouseDown={(e) => handleMouseDown(e, letter)}
          isOnBoard={
            lettersOnBoard.includes(letter) &&
            (letter !== 'Ł'
              ? true
              : letters.indexOf('Ł') === index || lettersOnBoard.filter((el) => el === 'Ł').length === 2)
          }
        >
          {letter}
        </Letter>
      ))}
    </StyledWrapper>
  );
};

export default PolishLettersInfo;
