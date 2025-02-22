import React from 'react';
import { Arrow } from 'react-konva';
import { useAppContext } from '../../context';

const KonvaArrow = ({ x, y, vertical = true, callback }) => {
  const { fieldSize } = useAppContext();

  const pointerSize = fieldSize > 37 ? 20 : fieldSize / 2;
  return (
    <Arrow
      x={x * fieldSize + fieldSize / 2 + (vertical ? 0 : pointerSize / 2)}
      y={y * fieldSize + fieldSize / 2 + (vertical ? pointerSize / 2 : 0)}
      rotation={vertical ? 90 : 0}
      pointerLength={pointerSize}
      pointerWidth={pointerSize}
      fill="yellow"
      opacity={0.8}
      onClick={callback}
      onTap={callback}
    />
  );
};

export default KonvaArrow;
