import React from 'react';
import { Rect, Text, Star } from 'react-konva';
import PropTypes from 'prop-types';

import { FIELDS_PARAMS } from '../globalVariables';
import { useAppContext } from '../../context';

const emptyFn = () => {};
const BoardField = ({ x, y, bonusType, callback = emptyFn }) => {
  const { fieldSize } = useAppContext();
  const handleClick = () => callback(x, y);
  return (
    <>
      <Rect
        x={x * fieldSize}
        y={y * fieldSize}
        width={fieldSize}
        height={fieldSize}
        fill="#08763b"
        stroke="#badce9"
        data-testid="board-field"
        onClick={handleClick}
        onTap={handleClick}
      />
      {bonusType ? (
        <>
          <Rect
            x={x * fieldSize + fieldSize / 2}
            y={y * fieldSize - fieldSize / 4 + 1}
            width={fieldSize}
            height={fieldSize}
            fill={FIELDS_PARAMS[bonusType].color}
            rotation={45}
            data-testid="rotated-rect"
          />
          <Rect
            x={x * fieldSize}
            y={y * fieldSize}
            width={fieldSize}
            height={fieldSize}
            fill={FIELDS_PARAMS[bonusType].color}
            stroke="#badce9"
            onClick={handleClick}
            onTap={handleClick}
          />
          <Text
            x={x * fieldSize}
            y={y * fieldSize + (fieldSize > 37 ? 8 : 6)}
            width={fieldSize}
            height={fieldSize}
            text={FIELDS_PARAMS[bonusType].text}
            align="center"
            fontSize={fieldSize > 37 ? 7 : fieldSize / 6}
            verticalAlign="center"
            fontFamily="Calibri"
            padding={1}
            onClick={handleClick}
            onTap={handleClick}
          />
          {bonusType === 'middle' && (
            <Star
              x={x * fieldSize + fieldSize / 2}
              y={y * fieldSize + fieldSize / 2}
              numPoints={8}
              innerRadius={fieldSize / 6}
              outerRadius={fieldSize / 4}
              fill="#DC9C10"
              opacity={1}
              data-testid="star"
              onClick={handleClick}
            />
          )}
        </>
      ) : null}
    </>
  );
};

BoardField.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  bonusType: PropTypes.string,
};

export default BoardField;
