import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";

import context from "../../context";
import { getCurrentUsedTiles } from "../../services/gameService";

const StyledWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  height: 300px;
  user-select: none;
  background-color: rgb(75, 75, 75);
  /* position: relative; */
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
    const { moves, getActualMove, actualMoveIndex } = useContext(context);
    const [usedTiles, setUsedTiles] = useState([]);

    useEffect(() => {
        setUsedTiles([
            ...getCurrentUsedTiles(moves, actualMoveIndex),
            ...getActualMove().letters,
        ]);
    }, [actualMoveIndex, moves, getActualMove]);
    return <StyledWrapper>{DeletionLetters(usedTiles)}</StyledWrapper>;
};

export default Deletion;
