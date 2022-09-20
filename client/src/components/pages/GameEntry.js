import React from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';

import KonvaArrow from '../atoms/KonvaArrow';
import KonvaBoard from '../organisms/KonvaBoard';
import { RackForInput } from '../organisms/Rack';
import Word from '../organisms/Word';
import useGameEntry from './hooks/useGameEntry';

const InputArea = styled.div`
  min-width: min(550px, 95%);
  max-width: 550px;
  min-height: 36px;
  max-height: 80px;
  background: #0c5605;
  position: relative;
`;

const InputsWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 95vw;
`;
const PlayerNameInput = styled.input`
  margin: auto;
  display: block;
  border: none;
  font-weight: bold;
  outline: none;
  font-size: 16px;
`;

const PointsInput = styled.input`
  width: min(80px, 6vw);
  // height: min(80px, 100%);
  min-width: 40px;
  margin-left: 10px;
  text-align: center;
  font-size: 22px;
  -moz-appearance: textfield;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const HiddenInput = styled.input`
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
`;
const BoardWrapper = styled.div`
  max-width: 650px;
  max-height: 650px;
  position: relative;
  margin: auto;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

const ButtonsDownWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
`;

const GameEntry = () => {
  const {
    inputValue,
    startPosition,
    wordPosition,
    currentWord,
    moves,
    playerName,
    points,
    handlePutNewLetter,
    handleBoardClick,
    handleOnChange,
    handleArrowClick,
    handleExchange,
    resetCurrentWord,
    addMove,
    setName,
    setPoints,
    downloadGame,
  } = useGameEntry();
  return (
    <>
      <PlayerNameInput value={playerName} onChange={setName} />
      <InputsWrapper>
        <InputArea onContextMenu={resetCurrentWord}>
          <HiddenInput value={inputValue} onChange={handleOnChange} />
          <RackForInput inputValue={inputValue} handleClickOnTile={handlePutNewLetter} />
        </InputArea>
        <PointsInput type="number" value={points} onChange={({ target }) => setPoints(target.value)} />
      </InputsWrapper>
      <ButtonsWrapper>
        <Button onClick={addMove}>dodaj</Button>
        <Button onClick={handleExchange}>wymiana</Button>
        <Button>strata</Button>
        <Button>pas</Button>
      </ButtonsWrapper>
      <BoardWrapper>
        <KonvaBoard handleBoardClick={handleBoardClick}>
          <KonvaArrow
            x={startPosition.x}
            y={startPosition.y}
            vertical={startPosition.vertical}
            callback={handleArrowClick}
          />
          <Word letters={currentWord} coordinates={wordPosition} isNewMove />
          {moves
            .filter((el) => el.coordinates)
            .map((el, i) => (
              <Word key={i} letters={el.word} coordinates={el.coordinates} />
            ))}
        </KonvaBoard>
      </BoardWrapper>
      <ButtonsDownWrapper>
        <Button onClick={resetCurrentWord}>cofnij</Button>
        <Button onClick={downloadGame}>pobierz</Button>
      </ButtonsDownWrapper>
    </>
  );
};

export default GameEntry;
