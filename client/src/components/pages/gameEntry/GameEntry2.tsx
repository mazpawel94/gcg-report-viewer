import styled from 'styled-components';

import BoardTile from '../../atoms/BoardTile';
import StyledButton from '../../atoms/Button';
import useHandleResize from '../../organisms/hooks/useHandleResize';
import KonvaBoard from '../../organisms/KonvaBoard';
import useGameEntry2, { EBoardFieldState, EGameStatus } from './hooks/useGameEntry2';
import LettersPanel from './LettersPanel';
import PolishLettersInfo from './PolishLettersInfo';

const BoardWrapper = styled.div<{ onMouseDown: any }>`
  max-width: 650px;
  max-height: 650px;
  position: relative;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;

const HiddenInput = styled.input`
  width: 0;
  height: 0;
  opacity: 0;
  position: absolute;
`;

const GameEntry2 = () => {
  const { fieldSize } = useHandleResize();
  const {
    inputRef,
    boardState,
    gameStatus,
    handleInput,
    handleMouseDown,
    handleMouseUp,
    handleMouseOver,
    handleBoardClick,
    handleBoardFieldClick,
    changeLetter,
    acceptBoard,
    acceptMove,
  } = useGameEntry2();

  return (
    <BoardWrapper onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
      <HiddenInput ref={inputRef} type="file" onInput={handleInput} />

      {gameStatus === EGameStatus.initial ? (
        <StyledButton onClick={handleBoardClick} style={{ margin: 'auto' }}>
          Dodaj zdjęcie
        </StyledButton>
      ) : null}

      {gameStatus === EGameStatus.suggestion ? <PolishLettersInfo boardState={boardState} /> : null}

      {boardState.some((el) => el.state === EBoardFieldState.changed) ? <LettersPanel callback={changeLetter} /> : null}

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

      {gameStatus === EGameStatus.suggestion ? (
        <StyledButton onClick={acceptBoard} style={{ margin: 'auto', marginTop: '35px' }}>
          Zapisz planszę
        </StyledButton>
      ) : null}
      {gameStatus === EGameStatus.filled ? (
        <StyledButton onClick={acceptMove} style={{ margin: 'auto', marginTop: '35px' }}>
          Zapisz ruch
        </StyledButton>
      ) : null}
    </BoardWrapper>
  );
};

export default GameEntry2;
