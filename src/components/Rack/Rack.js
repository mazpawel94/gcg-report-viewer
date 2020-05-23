import React from 'react';
import Tile from '../Tile/Tile';

const Rack = ({ move, actualOption }) => {

    const freeLetters = move.choiceOptions[actualOption].freeLetters.split('');

    const checkAndRemoveLetter = el => {
        const index = freeLetters.indexOf(el);
        if (index !== -1) {
            freeLetters.splice(index, 1);
            return false;
        }
        return true
    }

    const lettersDivs = move.letters.split('').map(el => (
        <Tile letter={el} played={checkAndRemoveLetter(el)} />
    ))

    return (
        <div>
            {lettersDivs}
        </div>
    );
}

export default Rack;
