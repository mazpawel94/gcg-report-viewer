import React from 'react';
import WithContext from '../../hoc/withContext';
import Tile from '../molecules/Tile';

const Rack = ({ context: { moves, actualMove, actualOption } }) => {

    const move = moves[actualMove];
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

export default WithContext(Rack);
