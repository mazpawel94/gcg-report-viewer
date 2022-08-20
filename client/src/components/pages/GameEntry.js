import React from "react";
import styled from "styled-components";

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
  margin: auto;
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
const GameEntry = () => {
  const {
    inputValue,
    startPosition,
    wordPosition,
    currentWord,
    handlePutNewLetter,
    handleBoardClick,
    handleOnChange,
    handleArrowClick,
  } = useGameEntry();
  return (
    <>
      <InputArea>
        <HiddenInput value={inputValue} onChange={handleOnChange} />
        <RackForInput
          inputValue={inputValue}
          handleClickOnTile={handlePutNewLetter}
        />
      </InputArea>
      <BoardWrapper>
        <KonvaBoard handleBoardClick={handleBoardClick}>
          <KonvaArrow
            x={startPosition.x}
            y={startPosition.y}
            vertical={startPosition.vertical}
            callback={handleArrowClick}
          />
          <Word letters={currentWord} coordinates={wordPosition} />
        </KonvaBoard>
      </BoardWrapper>
    </>
  );
};

export default GameEntry;
