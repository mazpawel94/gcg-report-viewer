import React, { useCallback } from 'react';
import styled from 'styled-components';

import Tile from '../molecules/Tile';
import useRack from './hooks/useRack';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Tiles = ({ letters, clickHandler }) =>
  letters.map(({ letter, played }, i) => <Tile key={i} letter={letter} played={played} clickHandler={clickHandler} />);

const Rack = () => {
  const { letters } = useRack();

  return (
    <StyledWrapper data-testid="rack">
      <Tiles letters={letters} />
    </StyledWrapper>
  );
};

export const RackForInput = ({ inputValue, handleClickOnTile }) => {
  const letters = inputValue
    .toUpperCase()
    .split('')
    .map((el) => ({ letter: el, played: false }));

  return (
    <StyledWrapper>
      <Tiles letters={letters} clickHandler={handleClickOnTile} />
    </StyledWrapper>
  );
};
export default Rack;
