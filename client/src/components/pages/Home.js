import React from "react";
import styled from "styled-components";

import Board from "../organisms/Board";
import HomeMenu from "../molecules/HomeMenu";
import { useEffect } from "react";
import { useAppContext } from "../../context";
import { actionTypes } from "../../reducers/gameReducer";

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const DummyNav = styled.div`
  height: 38px;
  width: 200px;
  color: white;
`;

const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  margin-top: 15px;
`;
const Home = () => {
  const { dispatch } = useAppContext();

  useEffect(() => {
    dispatch({ type: actionTypes.clearGame });
  }, []);

  return (
    <StyledWrapper>
      <HomeMenu />
      <BoardWrapper>
        <DummyNav />
        <Board asBackground />
      </BoardWrapper>
    </StyledWrapper>
  );
};

export default Home;
