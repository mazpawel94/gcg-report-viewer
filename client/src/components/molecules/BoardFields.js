import React from "react";

import BoardField from "../atoms/BoardField";
import {
  word2Fields,
  word3Fields,
  letter2Fields,
  letter3Fields,
} from "../globalVariables";

const allBonusFieldsArrays = [
  [word2Fields, "word2"],
  [word3Fields, "word3"],
  [letter2Fields, "letter2"],
  [letter3Fields, "letter3"],
  [[[7, 7]], "middle"],
];
const emptyFn = () => {};

const BonusFields = ({ coords, type, callback }) =>
  coords.map((el) => (
    <BoardField
      key={el}
      x={el[0]}
      y={el[1]}
      bonusType={type}
      callback={callback}
    />
  ));

const Fields = (handleBoardClick) => {
  return [...Array(15).keys()]
    .map((el) =>
      [...Array(15).keys()].map((el2) => (
        <BoardField
          key={`${el}${el}${el2}`}
          x={el}
          y={el2}
          callback={handleBoardClick}
        />
      ))
    )
    .flat();
};

const BoardFields = ({ handleBoardClick = emptyFn }) => {
  return (
    <>
      {Fields(handleBoardClick)}
      {allBonusFieldsArrays.map((el) => (
        <BonusFields coords={el[0]} type={el[1]} callback={handleBoardClick} />
      ))}
    </>
  );
};

export default BoardFields;
