import React from 'react';
import { Arrow } from 'react-konva';

import { size } from '../globalVariables';

const KonvaArrow = ({ x, y, vertical = true, callback }) => {
  return (
    <Arrow
      x={x * size + size / 2 + (vertical ? 0 : 10)}
      y={y * size + size / 2 + (vertical ? 10 : 0)}
      rotation={vertical ? 90 : 0}
      pointerLength={20}
      pointerWidth={20}
      fill="yellow"
      opacity={0.8}
      onClick={callback}
      onTap={callback}
    />
  );
};

export default KonvaArrow;
