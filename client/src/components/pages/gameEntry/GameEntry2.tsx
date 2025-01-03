import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';
import KonvaBoard from '../../organisms/KonvaBoard';
import useRecognizeBoardState from './hooks/useRecognizeBoardState';
import Word from '../../organisms/Word';
import BoardTile from '../../atoms/BoardTile';
import { useAppContext } from '../../../context';
import useGameEntry2, { EBoardFieldState } from './hooks/useGameEntry2';
import useHandleResize from '../../organisms/hooks/useHandleResize';
import StyledButton from '../../atoms/Button';
import Tile from '../../molecules/Tile';
import TileSquare from '../../atoms/TileSquare';
import { DeletionLetter } from '../../molecules/Deletion';
import LettersPanel from './LettersPanel';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const BoardWrapper = styled.div`
  max-width: 650px;
  max-height: 650px;
  position: relative;
  margin-bottom: 30px;
`;

const HiddenInput = styled.input`
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
`;

const GameEntry2 = () => {
  const { fieldSize } = useHandleResize();
  const { inputRef, boardState, handleInput, handleBoardClick, selectChangedTile, changeLetter } = useGameEntry2();
  console.log({ boardState, fieldSize });
  return (
    <BoardWrapper>
      <HiddenInput ref={inputRef} type="file" onInput={handleInput} />
      <StyledButton onClick={handleBoardClick}>Dodaj zdjęcie</StyledButton>
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
              handleClick={() => selectChangedTile(field.index)}
            />
          ),
        )}
      </KonvaBoard>
    </BoardWrapper>
  );
};

export default GameEntry2;
