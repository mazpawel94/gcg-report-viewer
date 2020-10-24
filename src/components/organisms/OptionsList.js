import React, { useContext } from 'react';

import Option from '../molecules/Option';
import AppContext from '../../context';

const OptionsList = () => {
    const { moves, actualMoveIndex, actualOptionIndex } = useContext(AppContext);
    const move = moves[actualMoveIndex];
    const optionsElements = move.choiceOptions.map((el, i) => (
        <Option key={i} params={el} selected={i === actualOptionIndex} />
    ))
    return (
        <>
            <h2>{move.letters}</h2>
            <ul>
                {optionsElements}
            </ul>
        </>
    );
}

export default OptionsList;
