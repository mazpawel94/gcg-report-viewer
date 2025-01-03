import PropTypes from 'prop-types';
import { Rect, Text } from 'react-konva';

import { POINTS } from '../globalVariables';
import { EBoardFieldState } from '../pages/gameEntry/hooks/useGameEntry2';

const COLORS = {
  basic: '#f8e8c7',
  [EBoardFieldState.suggestion]: '#f8e8c7',
  [EBoardFieldState.done]: '#f8e8c7',
  [EBoardFieldState.sketch]: '#f8e8c755',
  [EBoardFieldState.changed]: '#777',
  newMove: '#1ae825',
};
const emptyFn = (args) => {};

const BoardTile = ({ size, x, y, letter, state = '', transparent = false, newMove = false, handleClick = emptyFn }) => {
  const blank = letter === letter.toLowerCase();
  const TileColor = newMove ? COLORS.newMove : COLORS.basic;
  const pointTextSize = size > 37 ? 10 : size / 4;
  const letterFontSize = size > 37 ? 25 : Math.floor(size / 2);
  return (
    <>
      <Rect
        x={x + 1}
        y={y + 1}
        width={size - 2}
        height={size - 2}
        fill={state ? COLORS[state] : TileColor}
        cornerRadius={size > 37 ? 4 : 2}
        opacity={transparent ? 0 : 1}
        data-testid="tile"
        onClick={handleClick}
      />
      <Text
        x={x}
        y={y + (size > 37 ? 8 : letterFontSize / 2)}
        width={size}
        height={size}
        fill={'#015b52'}
        text={letter.toUpperCase()}
        align="center"
        fontSize={letterFontSize}
        verticalAlign="center"
        fontFamily="Arial"
        fontStyle="bold"
        opacity={transparent ? 0 : blank ? 0.3 : 1}
        data-testid="letter"
        onClick={handleClick}
      />
      <Text
        x={x + size - 2 - pointTextSize}
        y={y + size - 2 - pointTextSize}
        width={pointTextSize}
        height={pointTextSize}
        fill={'#015b52'}
        text={POINTS[letter]}
        align="center"
        fontSize={size > 37 ? 9 : Math.floor(size / 4)}
        verticalAlign="center"
        fontFamily="Arial"
        fontStyle="bold"
        opacity={transparent ? 0 : 1}
        data-testid="points"
        onClick={handleClick}
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
