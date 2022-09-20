import React from 'react';
import PropTypes from 'prop-types';
import { Rect, Text } from 'react-konva';

import { POINTS, size } from '../globalVariables';

const COLORS = {
  basic: '#f8e8c7',
  newMove: '#1ae825',
};
const BoardTile = ({ x, y, letter, transparent, newMove }) => {
  const blank = letter === letter.toLowerCase();
  const TileColor = newMove ? COLORS.newMove : COLORS.basic;
  return (
    <>
      <Rect
        x={x + 1}
        y={y + 1}
        width={size - 2}
        height={size - 2}
        fill={TileColor}
        cornerRadius={4}
        opacity={transparent ? 0 : 1}
        data-testid="tile"
      />
      <Text
        x={x}
        y={y + 8}
        width={size}
        height={size}
        fill={'#015b52'}
        text={letter.toUpperCase()}
        align="center"
        fontSize={25}
        verticalAlign="center"
        fontFamily="Arial"
        fontStyle="bold"
        opacity={transparent ? 0 : blank ? 0.3 : 1}
        data-testid="letter"
      />
      <Text
        x={x + size - 10}
        y={y + size - 10}
        width={10}
        height={10}
        fill={'#015b52'}
        text={POINTS[letter]}
        align="center"
        fontSize={9}
        verticalAlign="center"
        fontFamily="Arial"
        fontStyle="bold"
        opacity={transparent ? 0 : 1}
        data-testid="points"
      />
    </>
  );
};

BoardTile.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  letter: PropTypes.string,
  transparent: PropTypes.bool,
  newMove: PropTypes.bool,
};

export default BoardTile;
