import React from 'react';

import Option from '../molecules/Option';

const OptionsList = ({ move }) => {
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

export default OptionsList;
