import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Stage, Layer, Rect } from "react-konva";
import Word from "./Word";
import BoardFile from "../atoms/BoardFile";
import Rack3d from '../molecules/Rack3d';
import context from "../../context";
import { getWords, isMoveWithWord } from "../../services/gameService";
import {
  word2Fields,
  word3Fields,
  letter2Fields,
  letter3Fields,
} from "../globalVariables";

const StyledWrapper = styled.div`
  position: absolute;
  margin-top: 20px;
  min-width: 650px;
  height: 650px;
  width: 650px;
  background-color: #08763b;
  border: 3px solid rgb(34, 51, 51);
    transform: perspective(1000px) rotateX(70deg) rotateZ(-45deg);
  transform-style: preserve-3d;
  perspective: 1000px;
  transition: 1s linear;
  -webkit-transition: 1s linear;
  left: calc(50% - 325px);
`;

const GameArea = styled.div`
  position: absolute;
  top: 30px;
  left: 40px;
  height: calc(100% - 80px);
  width: calc(100% - 80px);
  z-index: 10;
 
`;

const Board = () => {
  const { moves, actualMoveIndex, actualOptionIndex } = useContext(context);
  const actualOption =
    moves.length &&
    actualMoveIndex !== undefined &&
    moves[actualMoveIndex].choiceOptions[actualOptionIndex];

  const drawFields = () => {
    return [...Array(15).keys()]
      .map((el) =>
        [...Array(15).keys()].map((el2) => <BoardFile x={el} y={el2} />)
      )
      .flat();
  };
  const drawBonusFields = (coords, type) =>
    coords.map((el) => <BoardFile x={el[0]} y={el[1]} type={type} />);

  return (
    <>
      <Rack3d />
      <Rack3d top />
      <StyledWrapper>
        <GameArea>
          <Stage width={570} height={570}>
            <Layer>
              <Rect width={570} height={570} fill="#08763b" />
              {drawFields()}
              {[
                [word2Fields, "word2"],
                [word3Fields, "word3"],
                [letter2Fields, "letter2"],
                [letter3Fields, "letter3"],
                [[[7, 7]], "middle"],
              ].map((el) => drawBonusFields(el[0], el[1]))}
            </Layer>
          </Stage>
        </GameArea>
      </StyledWrapper>
      {/* <StyledWrapper>
        {boardFields()}
        {actualOption &&
          (<GameArea>
            {getWords(moves, actualMoveIndex)}
            {isMoveWithWord(actualOption) &&
              <Word
                letters={actualOption.word}
                coordinates={actualOption.coordinates}
                actualMoveIndex
              />}
          </GameArea>)}
      </StyledWrapper> */}
    </>
  );
};

export default Board;
