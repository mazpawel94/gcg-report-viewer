import React from 'react';
import WithContext from '../../hoc/withContext';

import Option from '../molecules/Option';

const OptionsList = ({ context: { moves, actualMove } }) => {
    const move = moves[actualMove];
    const optionsElements = move.choiceOptions.map(el => (
        <Option params={el} />
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

export default WithContext(OptionsList);
