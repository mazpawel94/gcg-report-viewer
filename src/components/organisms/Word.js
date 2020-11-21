import React from "react";

import BoardTile from "../atoms/BoardTile";
import {
    betweenBracketsValidator,
    setPosition,
} from "../../services/gameService";

const size = 570 / 15;

const Word = ({ isNewMove, letters, coordinates }) => {
    const { x, y, verticle } = setPosition(coordinates);
    const isBetweenBrackets = betweenBracketsValidator(letters);

    const lettersDivs = () =>
        letters
            .split("")
            .filter(letter => !['(', ')'].includes(letter))
            .map((letter, index) => (
                <BoardTile
                    x={verticle ? x * size : ((x + index) * size)}
                    y={verticle ? ((y + index) * size) : y * size}
                    letter={letter}
                    transparent={isBetweenBrackets(index + 1)}
                    newMove={isNewMove}
                />
            ));
    return (
        <>{lettersDivs()}</>
    );
};

export default Word;
