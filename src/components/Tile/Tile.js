import React from 'react';
import styles from './Tile.module.scss'

import { POINTS } from '../globalVariables'

const Tile = ({ letter }) => {
    return (
        <div className={styles.tile}>
            {letter}
            <sub className={styles.points}>{POINTS[letter]}</sub>
        </div>
    );
}

export default Tile;
