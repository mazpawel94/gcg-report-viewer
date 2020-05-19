import React from 'react';
import styles from './Option.module.scss'
const Option = ({ params }) => {
    return (
        <li className={styles.li}>
            <span className={styles.evaluate}>{params.evaluate}</span>
            <span className={styles.coordinates}>{params.coordinates}</span>
            <span className={styles.word}>{params.word}</span>
            <span className={styles.movePoints}>{params.movePoints}</span>
            <span className={styles.percent}>{params.percent}</span>
            <span className={styles.freeLetters}>{params.freeLetters}</span>
        </li>
    );
}

export default Option;


// coordinates
// "*8C"
// evaluate
// "best"
// freeLetters
// ""
// movePoints
// "78"
// percent
// "100.0%"
// word
