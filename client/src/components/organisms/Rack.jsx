import React from 'react';
import styled from 'styled-components';

import Tile from '../molecules/Tile';
import useHandleResize from './hooks/useHandleResize';
import useRack from './hooks/useRack';

const StyledWrapper = styled.div`
  display: flex;
  width: 80%;
  justify-content: flex-start;
`;

const Tiles = ({ letters, small, clickHandler }) =>
  letters.map(({ letter, played }, i) => (
    <Tile key={i} letter={letter} played={played} small={small} clickHandler={clickHandler} />
  ));

const Rack = () => {
  const { letters } = useRack();

  return (
    <StyledWrapper data-testid="rack">
      <Tiles letters={letters} />
    </StyledWrapper>
  );
};

export const RackForInput = ({ inputValue, handleClickOnTile }) => {
  const { fieldSize } = useHandleResize();
  const letters = inputValue
    .toUpperCase()
    .split('')
    .map((el) => ({ letter: el, played: false }));

  return (
    <StyledWrapper>
      <Tiles small={fieldSize < 38} letters={letters} clickHandler={handleClickOnTile} />
    </StyledWrapper>
  );
};
export default Rack;
