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
`;
const GameNavigation = () => {
  const { dispatch } = useContext(context);
  useHandleKeyDown();

  return (
    <StyledWrapper data-testid="game-navigation">
      <StyledButton
        color="teal"
        icon="fast backward"
        onClick={() => dispatch({ type: actionTypes.setMoveIndex, payload: 0 })}
      />
      <StyledButton
        color="teal"
        icon="backward"
        onClick={() => dispatch({ type: actionTypes.decrementMoveIndex })}
      />
      <StyledButton
        color="teal"
        icon="forward"
        onClick={() => dispatch({ type: actionTypes.incrementMoveIndex })}
      />
      <StyledButton
        color="teal"
        icon="fast forward"
        onClick={() =>
          dispatch({ type: actionTypes.setMoveIndex, payload: -1 })
        }
      />
    </StyledWrapper>
  );
};

export default GameNavigation;
