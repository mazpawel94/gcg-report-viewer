import React from 'react';

import BoardTile from '../atoms/BoardTile';
import { betweenBracketsValidator, setPosition } from '../../services/gameService';
import { useAppContext } from '../../context';

const Word = ({ isNewMove, letters, coordinates }) => {
  const { fieldSize } = useAppContext();

  const { x, y, verticle } = setPosition(coordinates);
  const betweenBracketsArray = betweenBracketsValidator(letters);

  const lettersDivs = letters
    .split('')
    .filter((letter) => !['(', ')'].includes(letter))
    .map((letter, index) => (
      <BoardTile
        key={index}
        x={verticle ? x * fieldSize : (x + index) * fieldSize}
        y={verticle ? (y + index) * fieldSize : y * fieldSize}
        letter={letter}
        transparent={betweenBracketsArray[index]}
        newMove={isNewMove}
        size={fieldSize}
      />
    ));
  return <>{lettersDivs}</>;
};

export default Word;
