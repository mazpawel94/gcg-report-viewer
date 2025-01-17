import React from 'react';
import { Layer, Rect, Stage } from 'react-konva';
import styled, { css } from 'styled-components';

import AppContext from '../../context';
import BoardFields from '../molecules/BoardFields';
import useHandleResize from './hooks/useHandleResize';
import BoardCoordinates from '../molecules/BoardCoordinates';

const emptyFn = () => {};

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
      transform: rotateX(720deg);
    `}
`;

export const GameArea = styled.div`
  position: relative;
  top: 30px;
  left: 40px;
  height: calc(100% - 80px);
  width: calc(100% - 80px);

  canvas {
    background: red;
    z-index: 10;
  }

  ${({ simpleView }) =>
    !simpleView &&
    css`
      &::before {
        content: '';
        position: absolute;
        top: 0px;
        left: 0px;
        background-color: #c02929;
        width: calc(100% / 15);
        height: calc(100% / 15);
        transform: rotate(45deg);
        left: 30x;
        box-shadow:
          80px 80px #7590c7,
          188px 188px #c02929,
          294px 294px #7590c7,
          376px 376px #c02929,
          80px -80px #7590c7,
          188px -188px #c02929,
          296px -296px #7590c7,
          376px -376px #c02929,
          456px -297px #7590c7,
          564px -189px #c02929,
          673px -80px #7590c7,
          752px 0px #c02929,
          673px 80px #7590c7,
          564px 189px #c02929,
          456px 297px #7590c7;
      }
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        box-shadow: 0px 0px 0px 1px #badce9;
      }
    `}
`;

const KonvaBoard = ({ stageRef = {}, plainView = true, contextValue, children, handleBoardClick = emptyFn }) => {
  const { fieldSize } = useHandleResize();

  return (
    <StyledWrapper plainView={plainView} data-testid="board">
      <BoardCoordinates />
      <GameArea simpleView={fieldSize < 38}>
        <Stage width={fieldSize * 15} height={fieldSize * 15} ref={stageRef}>
          <AppContext.Provider value={{ ...contextValue, fieldSize }}>
            <Layer
              // fill="#08763b"
              fill="#111"
            >
              <Rect width={fieldSize * 15} height={fieldSize * 15} fill="#08763b" />
              <BoardFields handleBoardClick={handleBoardClick} />
              {children}
            </Layer>
          </AppContext.Provider>
        </Stage>
      </GameArea>
    </StyledWrapper>
  );
};

export default KonvaBoard;
