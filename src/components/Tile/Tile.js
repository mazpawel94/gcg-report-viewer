import React from 'react';
import styles from './Tile.module.scss'

import { POINTS } from '../globalVariables'

const Tile = ({ letter, played }) => {
    return (
        <div className={played ? styles.tilePlayed : styles.tile}>
            {letter}
            <sub className={styles.points}>{POINTS[letter]}</sub>
        </div>
    );
}

export default Tile;
