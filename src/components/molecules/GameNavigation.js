import React, { useContext } from "react";
import styled from "styled-components";
import { Button } from "semantic-ui-react";

import context from "../../context";
import useHandleKeyDown from "../../hooks/useHandleKeyDown";
import { actionTypes } from "../../reducers/gameReducer";

const StyledWrapper = styled.div`
  margin: auto;
`;

const StyledButton = styled(Button)`
  min-width: 80px;
  margin-left: 20px;
  background-color: #03252b !important;
  color: #f9e254 !important;

  &:hover {
    background-color: #779827 !important;
    color: #3b4b2e !important;
  }
`;

const GameNavigation = () => {
  const { dispatch } = useContext(context);
  useHandleKeyDown();

  const handleFastBackward = () =>
    dispatch({ type: actionTypes.setMoveIndex, payload: 0 });
  const handleBackward = () =>
    dispatch({ type: actionTypes.decrementMoveIndex });
  const handleForward = () =>
    dispatch({ type: actionTypes.incrementMoveIndex });
  const handleFastForward = () =>
    dispatch({ type: actionTypes.setMoveIndex, payload: -1 });

  return (
    <StyledWrapper data-testid="game-navigation">
      <StyledButton icon="fast backward" onClick={handleFastBackward} />
      <StyledButton icon="backward" onClick={handleBackward} />
      <StyledButton icon="forward" onClick={handleForward} />
      <StyledButton icon="fast forward" onClick={handleFastForward} />
    </StyledWrapper>
  );
};

export default GameNavigation;
