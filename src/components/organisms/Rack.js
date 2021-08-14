import React from "react";
import styled from "styled-components";

import Tile from "../molecules/Tile";
import useGetFromCurrentState from "../../hooks/useGetFromCurrentState";
const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 500px;
`;

const Rack = () => {
  const { actualOption, actualMove } = useGetFromCurrentState();
  if (!actualOption) return null;
  const freeLetters = actualOption.freeLetters.split("");

  const checkAndRemoveLetter = (el) => {
    const index = freeLetters.indexOf(el);
    if (index !== -1) {
      freeLetters.splice(index, 1);
      return false;
    }
    return true;
  };

  const tiles = actualMove.letters
    .split("")
    .map((el, i) => (
      <Tile key={i} letter={el} played={checkAndRemoveLetter(el)} />
    ));

  return <StyledWrapper data-testid="rack">{tiles}</StyledWrapper>;
};

export default Rack;
