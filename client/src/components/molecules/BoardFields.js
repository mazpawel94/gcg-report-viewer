import React from 'react';

import BoardField from "../atoms/BoardField";
import {
    word2Fields,
    word3Fields,
    letter2Fields,
    letter3Fields,
} from "../globalVariables";

const BonusFields = (coords, type) =>
    coords.map((el) => <BoardField key={el} x={el[0]} y={el[1]} type={type} />);

const Fields = () => {
    return [...Array(15).keys()]
        .map((el) =>
            [...Array(15).keys()].map((el2) => <BoardField key={`${el}${el}${el2}`} x={el} y={el2} />)
        )
        .flat();
};

const BoardFields = () => {
    return (
        <>
            {Fields()}
            {[
                [word2Fields, "word2"],
                [word3Fields, "word3"],
                [letter2Fields, "letter2"],
                [letter3Fields, "letter3"],
                [[[7, 7]], "middle"],
            ].map((el) => BonusFields(el[0], el[1]))}
        </>
    );
}

export default BoardFields;
