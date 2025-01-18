import styled from 'styled-components';

import { useMemo } from 'react';
import { EGameStatus, useGameEntryContext } from '../../../contexts/GameEntryContext';

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
  font-size: 15px;
  text-align: center;
  width: 25px;
  height: 25px;
  border-radius: 4px;
`;

const letters = 'ĄĆĘŁŁŃÓŚŹŻ'.split('');

const PolishLettersInfo = () => {
  const { boardState, gameStatus } = useGameEntryContext();
  const lettersOnBoard = useMemo(() => boardState.map((el) => el.letter), [boardState]);

  if (gameStatus !== EGameStatus.suggestion) return null;
  
  return (
    <StyledWrapper>
      {letters.map((letter, index) => (
        <Letter
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
