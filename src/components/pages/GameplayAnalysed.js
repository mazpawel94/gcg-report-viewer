import React, { useContext } from "react";

import styled from "styled-components";

import Board from "../organisms/Board";
import OptionsList from "../organisms/OptionsList";
import Rack from "../organisms/Rack";
import GameNavigation from "../molecules/GameNavigation";
import Result from "../organisms/Result";

import AppContext from "../../context";
const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 650px;
  position: relative;
  margin-left: 15px;
  margin-top: 15px;
`;
const MoveContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-grow: 1;
  margin-top: 15px;
`;

const GameplayAnalysed = () => {
  const { actualMoveIndex } = useContext(AppContext);

  return (
    <StyledWrapper>
      <BoardWrapper>
        <Board />
        <GameNavigation />
      </BoardWrapper>
      {actualMoveIndex !== undefined && (
        <MoveContent data-testid="move-content">
          <Result />
          <OptionsList />
          <Rack />
        </MoveContent>
      )}
    </StyledWrapper>
  );
};

export default GameplayAnalysed;
