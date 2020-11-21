import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { Stage, Layer, Rect } from "react-konva";

import Word from "./Word";
import BoardCoordinates from '../molecules/BoardCoordinates';
import BoardFields from '../molecules/BoardFields';
import Rack3d from "../molecules/Rack3d";
import context from "../../context";
import { getWords, isMoveWithWord } from "../../services/gameService";

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

const Board = () => {
  const { moves, actualMoveIndex, actualOptionIndex } = useContext(context);
  const actualOption =
    moves[actualMoveIndex]?.choiceOptions[actualOptionIndex];

  return (
    <>
      <Rack3d />
      <Rack3d top />
      <StyledWrapper perspective={!!actualOption}>
        {/* <StyledWrapper perspective={true}> */}
        <BoardCoordinates />
        <GameArea>
          <Stage width={570} height={570}>
            <Layer>
              <Rect width={570} height={570} fill="#08763b" />
              <BoardFields />
              {actualOption && getWords(moves, actualMoveIndex)}
              {actualOption && isMoveWithWord(actualOption) && (
                <Word
                  letters={actualOption.word}
                  coordinates={actualOption.coordinates}
                  isNewMove
                />
              )}
            </Layer>
          </Stage>
        </GameArea>
      </StyledWrapper>
    </>
  );
};

export default Board;
