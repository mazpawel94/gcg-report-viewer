import React from 'react';

import TileSquare from '../atoms/TileSquare';
import TilePoints from '../atoms/TilePoints';
import { POINTS } from '../globalVariables';

const Tile = ({ letter, played, onBoard, transparent, small, clickHandler }) => {
  const blank = letter === letter.toLowerCase();
  const handleClick = () => clickHandler?.(letter);
  return (
    <>
      {['(', ')'].includes(letter) ? null : (
        <TileSquare
          played={played}
          onBoard={onBoard}
          transparent={transparent}
          blank={blank}
          small={small}
          onClick={handleClick}
        >
          {letter.toUpperCase()}
          <TilePoints small={small}>{!blank && POINTS[letter]}</TilePoints>
        </TileSquare>
      )}
    </>
  );
};

export default Tile;
