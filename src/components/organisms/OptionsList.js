import React from 'react';
import WithContext from '../../hoc/withContext';

import Option from '../molecules/Option';

const OptionsList = ({ context: { moves, actualMove, actualOption } }) => {
    const move = moves[actualMove];
    const optionsElements = move.choiceOptions.map((el, i) => (
        <Option key={i} params={el} selected={i === actualOption} />
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
