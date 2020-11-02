import React, { useContext, useState } from "react";
import styled, { css } from "styled-components";
import { Stage, Layer, Rect } from "react-konva";
import Word from "./Word";
import BoardField from "../atoms/BoardField";
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
  margin-top: 20px;
  min-width: 650px;
  height: 650px;
  width: 650px;
  background-color: #08763b;
  border: 3px solid rgb(34, 51, 51);
    transform: translateX(65%) perspective(1000px) rotateX(70deg) rotateZ(-45deg);
  transform-style: preserve-3d;
  transition: 1s linear;
  -webkit-transition: 1s linear;

  ${({ perspective }) => perspective && css`
    transform: rotateX(0);
  `}
`;

const GameArea = styled.div`
  position: absolute;
  top: 30px;
  left: 40px;
  height: calc(100% - 80px);
  width: calc(100% - 80px);
  z-index: 10;
 
`;

const BonusFields = (coords, type) =>
  coords.map((el) => <BoardField x={el[0]} y={el[1]} type={type} />);

const Fields = () => {
  return [...Array(15).keys()]
    .map((el) =>
      [...Array(15).keys()].map((el2) => <BoardField x={el} y={el2} />)
    )
    .flat();
};

const Board = () => {
  const { moves, actualMoveIndex, actualOptionIndex } = useContext(context);
  const actualOption =
    moves.length &&
    actualMoveIndex !== undefined &&
    moves[actualMoveIndex].choiceOptions[actualOptionIndex];



  return (
    <>
      <Rack3d />
      <Rack3d top />
      <StyledWrapper perspective={!!actualOption}>
        <GameArea>
          <Stage width={570} height={570}>
            <Layer>
              <Rect width={570} height={570} fill="#08763b" />
              {Fields()}
              {[
                [word2Fields, "word2"],
                [word3Fields, "word3"],
                [letter2Fields, "letter2"],
                [letter3Fields, "letter3"],
                [[[7, 7]], "middle"],
              ].map((el) => BonusFields(el[0], el[1]))}
            </Layer>
          </Stage>
          {actualOption && getWords(moves, actualMoveIndex)}
          {actualOption && isMoveWithWord(actualOption) &&
            <Word
              letters={actualOption.word}
              coordinates={actualOption.coordinates}
              actualMoveIndex
            />}
        </GameArea>
      </StyledWrapper>
    </>
  );
};

export default Board;
