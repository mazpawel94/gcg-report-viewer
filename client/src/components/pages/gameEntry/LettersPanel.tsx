import styled from 'styled-components';
import { DeletionLetter } from '../../molecules/Deletion';

const StyledWrapper = styled.div`
  position: absolute;
  width: 385px;
  background: #0f4305;
  display: flex;
  flex-wrap: wrap;
  z-index: 100;
  left: 50%;
  top: 100px;
`;

const StyledDeletionLetter = styled(DeletionLetter)`
  width: 35px;
  height: 35px;
  line-height: 35px;
  font-size: 20px;
  cursor: pointer;
`;

const LettersPanel = ({ callback }: { callback: Function }) => (
  <StyledWrapper>
    <div style={{ width: '35px' }} />
    {'ĄĆĘŁŃÓŚŹŻ'.split('').map((letter) => (
      <StyledDeletionLetter onClick={() => callback(letter)}>{letter}</StyledDeletionLetter>
    ))}
    <div style={{ width: '35px' }} />
    {'ABCDEFGHIJKLMNOPRSTUWZ'.split('').map((letter) => (
      <StyledDeletionLetter onClick={() => callback(letter)}>{letter}</StyledDeletionLetter>
    ))}
  </StyledWrapper>
);

export default LettersPanel;
