import React from "react";
import styled from "styled-components";

import Board from "../organisms/Board";
import HomeMenu from "../molecules/HomeMenu";
import useFetchGreetings from "../../hooks/requests/useFetchGreetings";

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Home = () => {
  const { greetings } = useFetchGreetings();
  return (
    <StyledWrapper>
      {greetings ? <p>{greetings}</p> : null}
      <HomeMenu />
      <Board />
    </StyledWrapper>
  );
};

export default Home;
