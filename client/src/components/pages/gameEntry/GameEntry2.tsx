import styled from 'styled-components';

import { EGameStatus, GameEntryContextProvider } from '../../../contexts/GameEntryContext';
import BoardTile from '../../atoms/BoardTile';
import StyledButton from '../../atoms/Button';
import useHandleResize from '../../organisms/hooks/useHandleResize';
import KonvaBoard from '../../organisms/KonvaBoard';
import ChangingStateButtons from './ChangingStateButtons';
import CurrentMoveInfo from './CurrentMoveInfo';
import CurrentMoveRack from './CurrentMoveRack';
import useGameEntry2 from './hooks/useGameEntry2';
import LettersPanel from './LettersPanel';
import MovesList from './MovesList';
import PolishLettersInfo from './PolishLettersInfo';

const KonvaBoardWrapper = styled.div<{ onMouseDown: any }>`
  margin: auto;
  display: flex;
  justify-content: center;
`;

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: stretch;
  justify-content: space-around;
  gap: 100px;
`;

const BoardSectionWrapper = styled.div`
  flex-grow: 3;
`;
const MovesSectionWrapper = styled.div`
  flex-grow: 2;
  width: 500px;
  min-width: 400px;
  margin-top: 50px;
  padding-right: 60px;
  overflow-y: auto;
  max-height: 100%;
`;
const TopPanel = styled.div`
  display: flex;
  justify-content: center;
  height: 50px;
  align-items: end;
  width: 655px;
  margin: auto;
  justify-content: space-between;
`;

const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 5px;
}
`;
const GameEntry2 = () => {
  const { fieldSize } = useHandleResize();
  const {
    gameStatus,
    boardState,
    newMoveInfo,
    handleMouseDown,
    handleMouseUp,
    handleMouseOver,
    handlePass,
    handleBoardFieldClick,
  } = useGameEntry2();

  return (
    <StyledWrapper>
      <BoardSectionWrapper>
        <TopPanel>
          <CurrentMoveInfo newMoveInfo={newMoveInfo} />
          <ButtonsWrapper>
            {gameStatus === EGameStatus.filled ? (
              <>
                <StyledButton>wymiana</StyledButton>
                <StyledButton onClick={handlePass}>strata</StyledButton>
                <StyledButton onClick={handlePass}>pas</StyledButton>
              </>
            ) : null}
          </ButtonsWrapper>
        </TopPanel>

        <KonvaBoardWrapper onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
          <PolishLettersInfo />

          <LettersPanel />

          <KonvaBoard contextValue={{}}>
            {boardState.map((field) => (
              <BoardTile
                size={fieldSize}
                key={field.index}
                x={field.x * fieldSize}
                y={field.y * fieldSize}
                letter={field.letter}
                state={`${field.state}`}
                handleClick={(e) => handleBoardFieldClick(e, field.index)}
                handleMouseOver={(e) => handleMouseOver(e, field.index)}
              />
            ))}
          </KonvaBoard>
        </KonvaBoardWrapper>
        <ChangingStateButtons newMoveInfo={newMoveInfo} />
        <CurrentMoveRack newMoveInfo={newMoveInfo} />
      </BoardSectionWrapper>
      <MovesSectionWrapper>
        <MovesList />
      </MovesSectionWrapper>
    </StyledWrapper>
  );
};

const GameEntryWithContext = () => (
  <GameEntryContextProvider>
    <GameEntry2 />
  </GameEntryContextProvider>
);
export default GameEntryWithContext;
