import React from "react";

import Word from "./Word";
import useGetFromCurrentState from "../../hooks/useGetFromCurrentState";
import { findPlayedMove, isExchange } from "../../services/gameService";

const WordsOnBoard = () => {
  const { currentMoves, isLossMove } = useGetFromCurrentState();

  return (
    <>
      {currentMoves.map((move, index) => {
        const { word, coordinates } = findPlayedMove(move);
        return isExchange(coordinates) || isLossMove(index) ? null : (
          <Word key={index} letters={word} coordinates={coordinates} />
        );
      })}
    </>
  );
};

export default WordsOnBoard;
