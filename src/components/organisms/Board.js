import React, { useContext, useRef } from "react";
import styled, { css } from "styled-components";
import { Stage, Layer, Rect } from "react-konva";

import AppContext from "../../context";
import Word from "./Word";
import WordsOnBoard from "./WordsOnBoard";
import BoardCoordinates from "../molecules/BoardCoordinates";
import BoardFields from "../molecules/BoardFields";
import Rack3d from "../molecules/Rack3d";
import ToolButtons from "../organisms/ToolButtons";
import context from "../../context";
import { isMoveWithWord } from "../../services/gameService";
import useGetFromCurrentState from "../../hooks/useGetFromCurrentState";
const StyledWrapper = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
  min-width: 650px;
  height: 650px;
  width: 650px;
  box-sizing: content-box;
  background-color: #08763b;
  border: 3px solid rgb(34, 51, 51);
  transform: translateX(65%) perspective(1000px) rotateX(70deg) rotateZ(-45deg);
  transform-style: preserve-3d;
  transition: 1s linear;
  -webkit-transition: 1s linear;

  ${({ plainView }) =>
    plainView &&
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
  const contextForBridgeContext = useContext(context);
  const { moves, withoutNewMove } = useContext(context);

  const stageRef = useRef(null);
  const { actualOption } = useGetFromCurrentState();
  return (
    <>
      {moves?.length ? <ToolButtons stageRef={stageRef} /> : null}
      <StyledWrapper plainView={!!actualOption} data-testid="board">
        {!moves.length && (
          <>
            <Rack3d />
            <Rack3d top />
          </>
        )}
        <BoardCoordinates />
        <GameArea>
          <Stage width={570} height={570} ref={stageRef}>
            <AppContext.Provider value={contextForBridgeContext}>
              <Layer fill="#08763b">
                <Rect width={570} height={570} fill="#08763b" />
                <BoardFields />
                {actualOption ? <WordsOnBoard /> : null}
                {!withoutNewMove &&
                actualOption &&
                isMoveWithWord(actualOption) ? (
                  <Word
                    letters={actualOption.word}
                    coordinates={actualOption.coordinates}
                    isNewMove
                  />
                ) : null}
              </Layer>
            </AppContext.Provider>
          </Stage>
        </GameArea>
      </StyledWrapper>
    </>
  );
};

export default Board;
