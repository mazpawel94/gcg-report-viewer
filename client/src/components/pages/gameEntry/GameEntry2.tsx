import styled from 'styled-components';

import { EGameStatus, GameEntryContextProvider } from '../../../contexts/GameEntryContext';
import BoardTile from '../../atoms/BoardTile';
import StyledButton from '../../atoms/Button';
import useHandleResize from '../../organisms/hooks/useHandleResize';
import KonvaBoard from '../../organisms/KonvaBoard';
import { ResultForGameEntry } from '../../organisms/Result';
import ChangingStateButtons from './ChangingStateButtons';
import CurrentMoveInfo from './CurrentMoveInfo';
import CurrentMoveRack from './CurrentMoveRack';
import ExchangeLettersModal from './ExchangeLettersModal';
import useGameEntry2 from './hooks/useGameEntry2';
import LettersPanel from './LettersPanel';
import MovesList from './MovesList';
import PolishLettersInfo from './PolishLettersInfo';
import { useIsMobile } from '../../../hooks/useIsMobile';

const KonvaBoardWrapper = styled.div<{ onMouseDown: any }>`
  margin: auto;
  display: flex;
  justify-content: center;
`;

const StyledWrapper = styled.div<{ $isMobile: boolean }>`
  display: flex;
  width: 100%;
  min-height: 100vh;
  align-items: flex-start;
  justify-content: space-around;
  gap: ${({ $isMobile }) => ($isMobile ? "12px" : "60px")};
  flex-direction: ${({ $isMobile }) => ($isMobile ? "column" : "row")};
  padding: ${({ $isMobile }) => ($isMobile ? "8px" : "0")};
  box-sizing: border-box;
`;

// const StyledWrapper = styled.div`
//   display: flex;
//   width: 100%;
//   height: 100vh;
//   align-items: stretch;
//   justify-content: space-around;
//   gap: 100px;
// `;

// const BoardSectionWrapper = styled.div`
//   flex-grow: 3;
// `;
const BoardSectionWrapper = styled.div<{ $isMobile: boolean }>`
  flex: ${({ $isMobile }) => ($isMobile ? "1 1 auto" : "3 1 0")};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MovesSectionWrapper = styled.div`
  flex-grow: 2;
  width: 500px;
  min-width: 400px;
  margin-top: 10px;
  padding-right: 60px;
  overflow-y: auto;
  max-height: 100%;
`;
export const TopPanel = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  max-width: 655px;
  margin: 0 auto;
  height: 50px;
  padding: 0 8px;
  box-sizing: border-box;
  flex-wrap: wrap;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 5px;
  flex-wrap: wrap;
`;

const Photo = styled.div<{ imgSrc: string }>`
  position: relative;
  height: 70vh;
  background-image: url('${({ imgSrc }) => imgSrc}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  flex-grow: 1;
  margin-top: 5px;
`;

const GameEntry2 = () => {
  const { fieldSize } = useHandleResize();
  const isMobile = useIsMobile();
  const {
    gameStatus,
    boardPhotoUrl,
    boardState,
    newMoveInfo,
    handleBoardFieldClick,
    handleDownload,
    handleExchange,
    handleLoss,
    handleMouseDown,
    handleMouseOver,
    handleMouseUp,
    handlePass,
    undoMove,
  } = useGameEntry2();

  return (
    <StyledWrapper $isMobile={isMobile}>
      <BoardSectionWrapper  $isMobile={isMobile}>
        <TopPanel>
          <CurrentMoveInfo newMoveInfo={newMoveInfo} />
          <ButtonsWrapper>
            {gameStatus === EGameStatus.filled ? (
              <>
                <StyledButton onClick={handleDownload}>pobierz plik</StyledButton>
                <StyledButton onClick={undoMove}>cofnij ruch</StyledButton>
                <StyledButton onClick={handleExchange}>wymiana</StyledButton>
                <StyledButton onClick={handleLoss}>strata</StyledButton>
                <StyledButton onClick={handlePass}>pas</StyledButton>
              </>
            ) : null}
          </ButtonsWrapper>
        </TopPanel>

        <KonvaBoardWrapper onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
          <PolishLettersInfo />

          <LettersPanel />
          <ExchangeLettersModal />

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
       {/* {!isMobile &&  <CurrentMoveRack newMoveInfo={newMoveInfo} />} */}
      </BoardSectionWrapper>
     {/* {!isMobile && <MovesSectionWrapper>} */}
        <ResultForGameEntry />
        {gameStatus === EGameStatus.suggestion ? <Photo imgSrc={boardPhotoUrl} /> : null}
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
