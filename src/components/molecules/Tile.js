import React from 'react';

import TileSquare from '../atoms/TileSquare';
import TilePoints from '../atoms/TilePoints';
import { POINTS } from '../globalVariables';

const Tile = ({ letter, played, onBoard }) => {
    return (
        <TileSquare played={played} onBoard={onBoard}>
            {letter}
            <TilePoints>{POINTS[letter]}</TilePoints>
        </TileSquare>
    );
}

export default Tile;