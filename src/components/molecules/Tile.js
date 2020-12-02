import React from 'react';

import TileSquare from '../atoms/TileSquare';
import TilePoints from '../atoms/TilePoints';
import { POINTS } from '../globalVariables';

const Tile = ({ letter, played, onBoard, transparent }) => {
    const blank = (letter === letter.toLowerCase());
    return (
        <>
            {!['(', ')'].includes(letter) &&
                <TileSquare
                    played={played}
                    onBoard={onBoard}
                    transparent={transparent}
                    blank={blank} >
                    {letter.toUpperCase()}
                    <TilePoints>{!blank && POINTS[letter]}</TilePoints>
                </TileSquare>
            }
        </>
    );
}

export default Tile;