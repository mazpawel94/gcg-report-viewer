import styled from 'styled-components';

import { EBoardFieldState, EGameStatus, GameEntryContextProvider } from '../../../contexts/GameEntryContext';
import BoardTile from '../../atoms/BoardTile';
import StyledButton from '../../atoms/Button';
import useHandleResize from '../../organisms/hooks/useHandleResize';
import KonvaBoard from '../../organisms/KonvaBoard';
import ChangingStateButtons from './ChangingStateButtons';
import CurrentMoveInfo from './CurrentMoveInfo';
import useGameEntry2 from './hooks/useGameEntry2';
import LettersPanel from './LettersPanel';
import PolishLettersInfo from './PolishLettersInfo';

const StyledWrapper = styled.div<{ onMouseDown: any }>`
  margin: auto;
  display: flex;
  justify-content: center;
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
    handleBoardFieldClick,
  } = useGameEntry2();

  return (
    <>
      <TopPanel>
        <CurrentMoveInfo newMoveInfo={newMoveInfo} />
        <ButtonsWrapper>
          {gameStatus === EGameStatus.filled ? (
            <>
              <StyledButton>wymiana</StyledButton>
              <StyledButton>strata</StyledButton>
              <StyledButton>pas</StyledButton>
            </>
          ) : null}
        </ButtonsWrapper>
      </TopPanel>

      <StyledWrapper onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
        <PolishLettersInfo />

        <LettersPanel />

        <KonvaBoard contextValue={{}}>
          {boardState.map((field) =>
            field.state === EBoardFieldState.empty ? null : (
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
            ),
          )}
        </KonvaBoard>
      </StyledWrapper>
      <ChangingStateButtons newMoveInfo={newMoveInfo} />
    </>
  );
};

const GameEntryWithContext = () => (
  <GameEntryContextProvider>
    <GameEntry2 />
  </GameEntryContextProvider>
);
export default GameEntryWithContext;
