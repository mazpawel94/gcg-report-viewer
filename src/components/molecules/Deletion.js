import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";

import context from "../../context";
import useFillDeletion from "../../hooks/useFillDeletion";

const StyledWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  height: 300px;
  user-select: none;
  background-color: rgb(75, 75, 75);
  z-index: 2;
  top: 40px;
  left: 20px;
`;

const DeletionLetter = styled.div`
  box-sizing: border-box;
  text-align: center;
  width: 30px;
  height: 30px;
  background-color: #f8e8c7;
  border: 1px solid rgb(218, 193, 145);
  color: #015b52;
  border-radius: 3px;
  font-size: 20px;
  line-height: 30px;
  opacity: ${({ onBoard }) => (onBoard ? 0.4 : 1)};
`;
const LETTERS =
  "AAAAAAAAAĄBBCCCĆDDDEEEEEEEĘFGGHHIIIIIIIIJJKKKLLLŁŁMMMNNNNNŃOOOOOOÓPPPRRRRSSSSŚTTTUUWWWWYYYYZZZZZŻŹ??";

const DeletionLetters = (usedTiles) => {
  let temporaryDeletion = [...usedTiles];
  return LETTERS.split("").map((letter, index) => {
    const onBoard = temporaryDeletion.includes(letter);
    if (onBoard) temporaryDeletion.splice(temporaryDeletion.indexOf(letter), 1);
    return (
      <DeletionLetter key={index} onBoard={onBoard}>
        {letter}
      </DeletionLetter>
    );
  });
};

const Deletion = () => {
  const { getActualMove } = useContext(context);
  const [usedTiles, setUsedTiles] = useState([]);
  const { usedLetters } = useFillDeletion();
  useEffect(() => {
    setUsedTiles([...usedLetters, ...getActualMove().letters]);
  }, [usedLetters, getActualMove]);
  return (
    <StyledWrapper data-testid="deletion">
      {DeletionLetters(usedTiles)}
    </StyledWrapper>
  );
};

export default Deletion;
