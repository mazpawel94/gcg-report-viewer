import React, { useContext } from 'react';
import styled, { css } from 'styled-components';

import Word from './Word';
import WordsOnBoard from './WordsOnBoard';
import BoardCoordinates from '../molecules/BoardCoordinates';
import Rack3d from '../molecules/Rack3d';
import ToolButtons from '../organisms/ToolButtons';
import context from '../../context';
import { isMoveWithWord } from '../../services/gameService';
import useBoard from './hooks/useBoard';
import KonvaBoard from './KonvaBoard';

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

const Board = ({ asBackground = false }) => {
  const { moves, withoutNewMove, boardIsFront, actualOption, stageRef } = useBoard(asBackground);
  const contextForBridgeContext = useContext(context);
  return (
    <>
      {moves?.length ? <ToolButtons stageRef={stageRef} /> : null}
      <StyledWrapper plainView={boardIsFront} data-testid="board">
        {asBackground ? (
          <>
            <Rack3d />
            <Rack3d top />
          </>
        ) : null}
        <BoardCoordinates />
        <KonvaBoard contextValue={contextForBridgeContext} stageRef={stageRef}>
          {actualOption ? <WordsOnBoard /> : null}
          {!withoutNewMove && actualOption && isMoveWithWord(actualOption) ? (
            <Word letters={actualOption.word} coordinates={actualOption.coordinates} isNewMove />
          ) : null}
        </KonvaBoard>
      </StyledWrapper>
    </>
  );
};

export default Board;
