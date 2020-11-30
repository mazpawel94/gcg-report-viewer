import { useContext, useEffect, useState } from "react";

import context from "../context";
import { findPlayedMove, isLossMove } from "../services/gameService";

const useFillDeletion = () => {
    const { moves, actualMoveIndex } = useContext(context);
    const [usedLetters, setUsedLetters] = useState([]);

    useEffect(() => {
        const letters = moves
            .slice(0, actualMoveIndex)
            .filter((el, i) => !isLossMove(moves, i))
            .map((move) => findPlayedMove(move))
            .reduce(
                (acc, { word }) => [
                    ...acc,
                    ...word.replaceAll(/\([^)]+\)/g, "").split(""),
                ],
                ""
            );
        setUsedLetters([...letters]);
    }, [moves, actualMoveIndex]);

    return { usedLetters };
};

export default useFillDeletion;
