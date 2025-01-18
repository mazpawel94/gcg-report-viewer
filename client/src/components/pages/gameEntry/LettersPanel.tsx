import styled, { css } from 'styled-components';
import { DeletionLetter } from '../../molecules/Deletion';
import { EBoardFieldState, useGameEntryActionsContext, useGameEntryContext } from '../../../contexts/GameEntryContext';
import { useState } from 'react';
import StyledButton from '../../atoms/Button';

const StyledWrapper = styled.div`
  position: absolute;
  width: 385px;
  background: #0f4305;
  display: flex;
  flex-wrap: wrap;
  z-index: 100;
  left: 50%;
  top: 10px;
  transform: translateX(-50%);
  box-shadow: #0f4305 0px 10px 25px;

  h2 {
    width: 100%;
    color: white;
    text-align: center;
    margin-bottom: 5px;
  }
`;

const StyledDeletionLetter = styled(DeletionLetter)<{ selected?: boolean }>`
  width: 35px;
  height: 35px;
  line-height: 35px;
  font-size: 20px;
  cursor: pointer;
  ${({ selected }) =>
    selected &&
    css`
      background: #1ae825;
    `}
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  button {
    width: 100px;
  }
`;

const LettersPanel = () => {
  const { boardState } = useGameEntryContext();

  const { changeLetter } = useGameEntryActionsContext();

  if (!boardState.some((el) => el.state === EBoardFieldState.changed)) return null;

  return (
    <StyledWrapper>
      <div style={{ width: '35px' }} />
      {'ĄĆĘŁŃÓŚŹŻ'.split('').map((letter) => (
        <StyledDeletionLetter onClick={() => changeLetter(letter)}>{letter}</StyledDeletionLetter>
      ))}
      <div style={{ width: '35px' }} />
      {'ABCDEFGHIJKLMNOPRSTUWZ'.split('').map((letter) => (
        <StyledDeletionLetter onClick={() => changeLetter(letter)}>{letter}</StyledDeletionLetter>
      ))}
    </StyledWrapper>
  );
};

export const LettersPanelForBlank = ({ callback, numberOfBlanks }: { callback: Function; numberOfBlanks: number }) => {
  const [selectedLetter, setSelectedLetter] = useState<string[]>([]);
  const [numberOfDefinedBlanks, setNumberOfDefinedBlanks] = useState<number>(0);

  const handleOnClick = () => {
    if (numberOfBlanks === selectedLetter.length) {
      callback(selectedLetter);
    } else setNumberOfDefinedBlanks((prev) => prev + 1);
  };

  return (
    <StyledWrapper>
      <h2>Zdefiniuj blanka</h2>
      {'AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWZŹŻ'.split('').map((letter, i) => (
        <StyledDeletionLetter
          key={i}
          selected={letter === selectedLetter[numberOfDefinedBlanks]}
          onClick={() =>
            setSelectedLetter((prev) =>
              !numberOfDefinedBlanks ? [letter] : [...prev.slice(0, numberOfDefinedBlanks), letter],
            )
          }
        >
          {letter}
        </StyledDeletionLetter>
      ))}
      {selectedLetter[numberOfDefinedBlanks] !== '' ? (
        <ButtonWrapper>
          <StyledButton onClick={handleOnClick}>ok</StyledButton>
        </ButtonWrapper>
      ) : null}
    </StyledWrapper>
  );
};
export default LettersPanel;
