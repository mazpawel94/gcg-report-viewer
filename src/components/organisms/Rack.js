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

    const tiles = move.letters.split('').map((el, i) => (
        <Tile
            key={i}
            letter={el}
            played={checkAndRemoveLetter(el)}
        />
    ))

    return (
        <>
            {tiles}
        </>
    );
}

export default WithContext(Rack);
