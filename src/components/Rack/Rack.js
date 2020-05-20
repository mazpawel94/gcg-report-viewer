import React from 'react';
import Tile from '../Tile/Tile'

const Rack = ({ move, actualOption }) => {
    // const { freeLetters } = move.choiceOptions[actualOption];
    const lettersDivs = move.letters.split('').map(el => (
        <Tile letter={el} />
    ))
    return (
        <div>
            {lettersDivs}
        </div>
    );
}

export default Rack;
