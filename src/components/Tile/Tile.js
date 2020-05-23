import React from 'react';

import TileSquare from './TileSquare';
import TilePoints from './TilePoints';
import { POINTS } from '../globalVariables';

const Tile = ({ letter, played }) => {
    return (
        <TileSquare played={played}>
            {letter}
            <TilePoints>{POINTS[letter]}</TilePoints>
        </TileSquare>
    );
}

export default Tile;