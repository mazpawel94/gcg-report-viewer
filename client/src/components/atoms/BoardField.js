import React from 'react';
import { Rect, Text, Star } from 'react-konva';
import PropTypes from 'prop-types';

import { FIELDS_PARAMS, size } from '../globalVariables';

const emptyFn = () => {};
const BoardField = ({ x, y, bonusType, callback = emptyFn }) => {
  const handleClick = () => callback(x, y);
  return (
    <>
      <Rect
        x={x * size}
        y={y * size}
        width={size}
        height={size}
        fill="#08763b"
        stroke="#badce9"
        data-testid="board-field"
        onClick={handleClick}
        onTap={handleClick}
      />
      {bonusType ? (
        <>
          <Rect
            x={x * size + size / 2}
            y={y * size - size / 4 + 1}
            width={size}
            height={size}
            fill={FIELDS_PARAMS[bonusType].color}
            rotation={45}
            data-testid="rotated-rect"
          />
          <Rect
            x={x * size}
            y={y * size}
            width={size}
            height={size}
            fill={FIELDS_PARAMS[bonusType].color}
            stroke="#badce9"
            onClick={handleClick}
            onTap={handleClick}
          />
          <Text
            x={x * size}
            y={y * size + 8}
            width={size}
            height={size}
            text={FIELDS_PARAMS[bonusType].text}
            align="center"
            fontSize={7}
            verticalAlign="center"
            fontFamily="Calibri"
            padding={1}
            onClick={handleClick}
            onTap={handleClick}
          />
          {bonusType === 'middle' && (
            <Star
              x={x * size + size / 2}
              y={y * size + size / 2}
              numPoints={8}
              innerRadius={size / 6}
              outerRadius={size / 4}
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
