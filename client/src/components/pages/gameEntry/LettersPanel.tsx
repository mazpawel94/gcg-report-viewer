import styled from 'styled-components';
import { DeletionLetter } from '../../molecules/Deletion';
import { EBoardFieldState, useGameEntryActionsContext, useGameEntryContext } from '../../../contexts/GameEntryContext';

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
`;

const StyledDeletionLetter = styled(DeletionLetter)`
  width: 35px;
  height: 35px;
  line-height: 35px;
  font-size: 20px;
  cursor: pointer;
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

export default LettersPanel;
