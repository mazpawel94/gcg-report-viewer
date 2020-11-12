import React, { useContext, useState } from "react";
import styled, { css } from "styled-components";
import { Stage, Layer, Rect } from "react-konva";
import Word from "./Word";
import BoardField from "../atoms/BoardField";
import Rack3d from "../molecules/Rack3d";
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

  ${({ perspective }) =>
    perspective &&
    css`
      transform: rotateX(0);
    `}
`;

const UpCoordinates = styled.div`
  position: absolute;
  color: white;
  line-height: 30px;
  left: 40px;
  height: 30px;
  width: calc(100% - 80px);
  font-size: 11px;
  display: flex;
`;

const LeftCoordinates = styled.div`
  position: absolute;
  color: white;
  top: 30px;
  left: 10px;
  height: calc(100% - 80px);
  width: 30px;
  font-size: 11px;
  display: flex;
  flex-direction: column;
`;

const CoordinateX = styled.div`
  width: calc(100% / 15);
  text-align: center;
`;

const CoordinateY = styled.div`
  height: calc(100% / 15);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GameArea = styled.div`
  position: absolute;
  top: 30px;
  left: 40px;
  height: calc(100% - 80px);
  width: calc(100% - 80px);
  z-index: 10;

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: #c02929;
    width: calc(100% / 15);
    height: calc(100% / 15);
    transform: rotate(45deg);
    left: 30x;
    box-shadow: 80px 80px #7590c7, 188px 188px #c02929, 294px 294px #7590c7,
      376px 376px #c02929, 80px -80px #7590c7, 188px -188px #c02929,
      296px -296px #7590c7, 376px -376px #c02929, 456px -297px #7590c7,
      564px -189px #c02929, 673px -80px #7590c7, 752px 0px #c02929,
      673px 80px #7590c7, 564px 189px #c02929, 456px 297px #7590c7;
  }
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    box-shadow: 0px 0px 0px 1px #badce9;
  }
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
        {/* <StyledWrapper perspective={true}> */}
        <UpCoordinates>
          {[...Array(15).keys()].map((el) => (
            <CoordinateX>{el + 1}</CoordinateX>
          ))}
        </UpCoordinates>
        <LeftCoordinates>
          {"ABCDEFGHIJKLMNO".split("").map((el) => (
            <CoordinateY>{el}</CoordinateY>
          ))}
        </LeftCoordinates>
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
          {actualOption && isMoveWithWord(actualOption) && (
            <Word
              letters={actualOption.word}
              coordinates={actualOption.coordinates}
              actualMoveIndex
            />
          )}
        </GameArea>
      </StyledWrapper>
    </>
  );
};

export default Board;
