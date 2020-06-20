import React from 'react';
import styled from 'styled-components';
import styles from './Board.module.scss'
import WithContext from '../../hoc/withContext';
import Word from '../organisms/Word';

const boardFields = () => (
  <div className={styles.board}>
    <div className={styles.upCoordinates}>
      <div className={styles.coordinateX}>1</div>
      <div className={styles.coordinateX}>2</div>
      <div className={styles.coordinateX}>3</div>
      <div className={styles.coordinateX}>4</div>
      <div className={styles.coordinateX}>5</div>
      <div className={styles.coordinateX}>6</div>
      <div className={styles.coordinateX}>7</div>
      <div className={styles.coordinateX}>8</div>
      <div className={styles.coordinateX}>9</div>
      <div className={styles.coordinateX}>10</div>
      <div className={styles.coordinateX}>11</div>
      <div className={styles.coordinateX}>12</div>
      <div className={styles.coordinateX}>13</div>
      <div className={styles.coordinateX}>14</div>
      <div className={styles.coordinateX}>15</div>
    </div>
    <div className={styles.leftCoordinates}>
      <div className={styles.coordinateY}>A</div>
      <div className={styles.coordinateY}>B</div>
      <div className={styles.coordinateY}>C</div>
      <div className={styles.coordinateY}>D</div>
      <div className={styles.coordinateY}>E</div>
      <div className={styles.coordinateY}>F</div>
      <div className={styles.coordinateY}>G</div>
      <div className={styles.coordinateY}>H</div>
      <div className={styles.coordinateY}>I</div>
      <div className={styles.coordinateY}>J</div>
      <div className={styles.coordinateY}>K</div>
      <div className={styles.coordinateY}>L</div>
      <div className={styles.coordinateY}>M</div>
      <div className={styles.coordinateY}>N</div>
      <div className={styles.coordinateY}>O</div>
    </div>
    <div className={`${styles.field} ${styles.w3}`}><span>POTRÓJNA PREMIA SŁOWNA</span></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l2}`}><span>PODWÓJNA PREMIA LITEROWA</span></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.w3}`}><span>POTRÓJNA PREMIA SŁOWNA</span></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l2}`}><span>PODWÓJNA PREMIA LITEROWA</span></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.w3}`}><span>POTRÓJNA PREMIA SŁOWNA</span></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.w2}`}><span>PODWÓJNA PREMIA SŁOWNA</span></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l3}`}><span>POTRÓJNA PREMIA LITEROWA</span></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l3}`}> <span>POTRÓJNA PREMIA LITEROWA</span></div >
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.w2}`}><span>PODWÓJNA PREMIA SŁOWNA</span></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.w2}`}><span>PODWÓJNA PREMIA SŁOWNA</span></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l2}`}><span>PODWÓJNA PREMIA LITEROWA</span></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l2}`}><span>PODWÓJNA PREMIA LITEROWA</span></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.w2}`}><span>PODWÓJNA PREMIA SŁOWNA</span></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l2}`}><span>PODWÓJNA PREMIA LITEROWA</span></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.w2}`}><span>PODWÓJNA PREMIA SŁOWNA</span></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l2}`}><span>PODWÓJNA PREMIA LITEROWA</span></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.w2}`}><span>PODWÓJNA PREMIA SŁOWNA</span></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l2}`}><span>PODWÓJNA PREMIA LITEROWA</span></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.w2}`}><span>PODWÓJNA PREMIA SŁOWNA</span></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.w2}`}><span>PODWÓJNA PREMIA SŁOWNA</span></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l3}`}><span>POTRÓJNA PREMIA LITEROWA</span></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l3}`}><span>POTRÓJNA PREMIA LITEROWA</span></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l3}`}><span>POTRÓJNA PREMIA LITEROWA</span></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l3}`}><span>POTRÓJNA PREMIA LITEROWA</span></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l2}`}><span>PODWÓJNA PREMIA LITEROWA</span></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l2}`}><span>PODWÓJNA PREMIA LITEROWA</span></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l2}`}><span>PODWÓJNA PREMIA LITEROWA</span></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l2}`}><span>PODWÓJNA PREMIA LITEROWA</span></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.w3}`}><span>POTRÓJNA PREMIA SŁOWNA</span></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l2}`}><span>PODWÓJNA PREMIA LITEROWA</span></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.center}`}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l2}`}><span>PODWÓJNA PREMIA LITEROWA</span></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.w3}`}><span>POTRÓJNA PREMIA SŁOWNA</span></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l2}`}><span>PODWÓJNA PREMIA LITEROWA</span></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l2}`}><span>PODWÓJNA PREMIA LITEROWA</span></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l2}`}><span>PODWÓJNA PREMIA LITEROWA</span></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l2}`}><span>PODWÓJNA PREMIA LITEROWA</span></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l3}`}><span>POTRÓJNA PREMIA LITEROWA</span></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l3}`}><span>POTRÓJNA PREMIA LITEROWA</span></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l3}`}><span>POTRÓJNA PREMIA LITEROWA</span></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l3}`}><span>POTRÓJNA PREMIA LITEROWA</span></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.w2}`}><span>PODWÓJNA PREMIA SŁOWNA</span></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.w2}`}><span>PODWÓJNA PREMIA SŁOWNA</span></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l2}`}><span>PODWÓJNA PREMIA LITEROWA</span></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.w2}`}><span>PODWÓJNA PREMIA SŁOWNA</span></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l2}`}><span>PODWÓJNA PREMIA LITEROWA</span></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.w2}`}><span>PODWÓJNA PREMIA SŁOWNA</span></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l2}`}><span>PODWÓJNA PREMIA LITEROWA</span></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.w2}`}><span>PODWÓJNA PREMIA SŁOWNA</span></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l2}`}><span>PODWÓJNA PREMIA LITEROWA</span></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l2}`}><span>PODWÓJNA PREMIA LITEROWA</span></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.w2}`}><span>PODWÓJNA PREMIA SŁOWNA</span></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.w2}`}><span>PODWÓJNA PREMIA SŁOWNA</span></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l3}`}><span>POTRÓJNA PREMIA LITEROWA</span></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l3}`}><span>POTRÓJNA PREMIA LITEROWA</span></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.w2}`}><span>PODWÓJNA PREMIA SŁOWNA</span></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.w3}`}><span>POTRÓJNA PREMIA SŁOWNA</span></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l2}`}><span>PODWÓJNA PREMIA LITEROWA</span></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.w3}`}><span>POTRÓJNA PREMIA SŁOWNA</span></div>
    <div className={`${styles.field} ${styles.down}`}></div >
    <div className={`${styles.field} ${styles.down}`}></div >
    <div className={`${styles.field} ${styles.down}`}></div>
    <div className={`${styles.field} ${styles.l2}`}><span>PODWÓJNA PREMIA LITEROWA</span></div>
    <div className={`${styles.field} ${styles.down}`}></div>
    <div className={`${styles.field} ${styles.down}`}></div>
    <div className={`${styles.field} ${styles.w3}`}><span>POTRÓJNA PREMIA SŁOWNA</span></div>
  </div >
)

const GameArea = styled.div`
  position: absolute;
  top: 30px;
  left: 40px;
  height: calc(100% - 80px);
  width: calc(100% - 80px);
  z-index: 10;
`

const Board = ({ context: { moves, actualMove, actualOption } }) => {
  return (
    <>
      <div className={styles.boardWrapper}>
        <canvas> </canvas>
        {boardFields()}
        <GameArea>
          {(actualMove || actualMove === 0) && <Word letters={moves[actualMove].choiceOptions[actualOption].word} />}
        </GameArea>
      </div>
    </>
  );
}


export default WithContext(Board);
