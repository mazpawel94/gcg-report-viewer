import React from "react";
import styled from "styled-components";
import Button from "../atoms/Button";

import KonvaArrow from "../atoms/KonvaArrow";
import KonvaBoard from "../organisms/KonvaBoard";
import { RackForInput } from "../organisms/Rack";
import Word from "../organisms/Word";
import useGameEntry from "./hooks/useGameEntry";

const InputArea = styled.div`
  width: 550px;
  height: 80px;
  background: #0c5605;
  position: relative;
`;

const InputsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const PlayerNameInput = styled.input`
  width: 550px;
  margin: auto;
  display: block;
  border: none;
  font-weight: bold;
  outline: none;
  font-size: 16px;
`;

const PointsInput = styled.input`
  width: 80px;
  height: 80px;
  margin-left: 10px;
  text-align: center;
  font-size: 22px;
`;

const HiddenInput = styled.input`
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
`;
const BoardWrapper = styled.div`
  width: 650px;
  height: 650px;
  position: relative;
  margin: auto;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
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
          <RackForInput
            inputValue={inputValue}
            handleClickOnTile={handlePutNewLetter}
          />
        </InputArea>
        <PointsInput
          value={points}
          onChange={({ target }) => setPoints(target.value)}
        />
      </InputsWrapper>
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
      <ButtonsWrapper>
        <Button onClick={addMove}>dodaj</Button>
        <Button onClick={resetCurrentWord}>cofnij</Button>
        <Button onClick={handleExchange}>wymiana</Button>
        <Button>strata</Button>
        <Button>pas</Button>
        <Button onClick={downloadGame}>pobierz</Button>
      </ButtonsWrapper>
    </>
  );
};

export default GameEntry;
