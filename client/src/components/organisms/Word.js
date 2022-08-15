import React from "react";

import BoardTile from "../atoms/BoardTile";
import {
  betweenBracketsValidator,
  setPosition,
} from "../../services/gameService";
import { size } from "../globalVariables";

const Word = ({ isNewMove, letters, coordinates }) => {
  const { x, y, verticle } = setPosition(coordinates);
  const betweenBracketsArray = betweenBracketsValidator(letters);

  const lettersDivs = letters
    .split("")
    .filter((letter) => !["(", ")"].includes(letter))
    .map((letter, index) => (
      <BoardTile
        key={index}
        x={verticle ? x * size : (x + index) * size}
        y={verticle ? (y + index) * size : y * size}
        letter={letter}
        transparent={betweenBracketsArray[index]}
        newMove={isNewMove}
      />
    ));
  return <>{lettersDivs}</>;
};

export default Word;
