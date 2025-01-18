import styled from 'styled-components';

import { EGameStatus, IApprovedMove } from '../../../contexts/GameEntryContext';
import StyledButton from '../../atoms/Button';
import useChangingStateButtons from './hooks/useChangingStateButtons';
import { LettersPanelForBlank } from './LettersPanel';

const HiddenInput = styled.input`
  width: 0;
  height: 0;
  opacity: 0;
  position: absolute;
`;
const StyledWrapper = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
`;

const ChangingStateButtons = ({ newMoveInfo }: { newMoveInfo: IApprovedMove | null }) => {
  const {
    inputRef,
    defineBlankModalIsOpen,
    gameStatus,
    moveIsCorrect,
    acceptBoard,
    acceptMove,
    handleInput,
    handleNewPictureClick,
    replaceBlanks,
  } = useChangingStateButtons(newMoveInfo);

  return (
    <StyledWrapper>
      <HiddenInput ref={inputRef} type="file" onInput={handleInput} />
      {gameStatus === EGameStatus.initial ? (
        <StyledButton onClick={handleNewPictureClick}>Dodaj zdjęcie</StyledButton>
      ) : null}
      {gameStatus === EGameStatus.suggestion ? <StyledButton onClick={acceptBoard}>Zapisz planszę</StyledButton> : null}
      {moveIsCorrect ? <StyledButton onClick={acceptMove}>Zapisz ruch</StyledButton> : null}
      {defineBlankModalIsOpen ? (
        <LettersPanelForBlank
          callback={replaceBlanks}
          numberOfBlanks={newMoveInfo!.letters.split('').filter((el) => el === '?').length!}
        />
      ) : null}
    </StyledWrapper>
  );
};

export default ChangingStateButtons;
