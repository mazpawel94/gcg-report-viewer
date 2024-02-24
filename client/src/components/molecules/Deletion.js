import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import useFillDeletion from '../../hooks/useFillDeletion';
import useGetFromCurrentState from '../../hooks/useGetFromCurrentState';

const StyledWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  width: 150px;
  height: 150px;
  user-select: none;
  background-color: rgb(75, 75, 75);
  z-index: 2;
  bottom: 15px;
  right: 30px;
`;

const DeletionLetter = styled.div`
  box-sizing: border-box;
  text-align: center;
  width: 15px;
  height: 15px;
  background-color: #f8e8c7;
  border: 1px solid rgb(218, 193, 145);
  color: #015b52;
  border-radius: 3px;
  font-size: 10px;
  line-height: 15px;
  opacity: ${({ onBoard }) => (onBoard ? 0.4 : 1)};
`;
const LETTERS = 'AAAAAAAAAĄBBCCCĆDDDEEEEEEEĘFGGHHIIIIIIIIJJKKKLLLŁŁMMMNNNNNŃOOOOOOÓPPPRRRRSSSSŚTTTUUWWWWYYYYZZZZZŻŹ??';

const DeletionLetters = (usedTiles) => {
  let temporaryDeletion = [...usedTiles];
  return LETTERS.split('').map((letter, index) => {
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
  const { actualMove } = useGetFromCurrentState();
  const [usedTiles, setUsedTiles] = useState([]);
  const { usedLetters } = useFillDeletion();
  useEffect(() => {
    setUsedTiles([...usedLetters, ...actualMove.letters]);
  }, [usedLetters, actualMove]);
  return <StyledWrapper data-testid="deletion">{DeletionLetters(usedTiles)}</StyledWrapper>;
};

export default Deletion;
