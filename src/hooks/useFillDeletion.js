import { useEffect, useState, useContext } from "react";

import { findPlayedMove } from "../services/gameService";
import useGetFromCurrentState from "./useGetFromCurrentState";
const useFillDeletion = () => {
  const [usedLetters, setUsedLetters] = useState([]);
  const { currentMoves, isLossMove } = useGetFromCurrentState();
  useEffect(() => {
    const letters = currentMoves
      .filter((el, i) => !isLossMove(i))
      .map((move) => findPlayedMove(move))
      .reduce(
        (acc, { word }) => [
          ...acc,
          ...word.replaceAll(/\([^)]+\)/g, "").split(""),
        ],
        ""
      );
    setUsedLetters([...letters]);
  }, [currentMoves.length]);

  return { usedLetters };
};

export default useFillDeletion;
