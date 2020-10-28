import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Stage, Layer, Rect, Text } from "react-konva";
import styles from "./Board.module.scss";
import Word from "../organisms/Word";

import context from "../../context";
import { getWords, isMoveWithWord } from "../../services/gameService";

const Field = ({ x, y, type }) => {
  const size = 570 / 15;
  return (
    <>
      <Rect
        x={x * size}
        y={y * size}
        width={size}
        height={size}
        fill="#08763b"
        stroke="#badce9"
      />
      {type === "word2" && (
        <>
          <Rect
            x={x * size + size / 2}
            y={y * size - size / 4}
            width={size}
            height={size}
            fill=" #e8b442"
            rotation={45}
          />
          <Rect
            x={x * size}
            y={y * size}
            width={size}
            height={size}
            fill=" #e8b442"
            stroke="#badce9"
          />
          <Text
            x={x * size}
            y={y * size + 8}
            width={size}
            height={size}
            text="PODWÓJNA PREMIA SŁOWNA"
            align="center"
            fontSize={7}
            verticalAlign="center"
            fontFamily="Calibri"
            padding={1}
          />
        </>
      )}
    </>
  )
};

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
    <div className={`${styles.field} ${styles.w3}`}>
      <span>POTRÓJNA PREMIA SŁOWNA</span>
    </div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l2}`}>
      <span>PODWÓJNA PREMIA LITEROWA</span>
    </div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.w3}`}>
      <span>POTRÓJNA PREMIA SŁOWNA</span>
    </div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l2}`}>
      <span>PODWÓJNA PREMIA LITEROWA</span>
    </div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.w3}`}>
      <span>POTRÓJNA PREMIA SŁOWNA</span>
    </div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.w2}`}>
      <span>PODWÓJNA PREMIA SŁOWNA</span>
    </div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l3}`}>
      <span>POTRÓJNA PREMIA LITEROWA</span>
    </div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l3}`}>
      {" "}
      <span>POTRÓJNA PREMIA LITEROWA</span>
    </div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.w2}`}>
      <span>PODWÓJNA PREMIA SŁOWNA</span>
    </div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.w2}`}>
      <span>PODWÓJNA PREMIA SŁOWNA</span>
    </div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l2}`}>
      <span>PODWÓJNA PREMIA LITEROWA</span>
    </div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l2}`}>
      <span>PODWÓJNA PREMIA LITEROWA</span>
    </div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.w2}`}>
      <span>PODWÓJNA PREMIA SŁOWNA</span>
    </div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l2}`}>
      <span>PODWÓJNA PREMIA LITEROWA</span>
    </div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.w2}`}>
      <span>PODWÓJNA PREMIA SŁOWNA</span>
    </div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l2}`}>
      <span>PODWÓJNA PREMIA LITEROWA</span>
    </div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.w2}`}>
      <span>PODWÓJNA PREMIA SŁOWNA</span>
    </div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l2}`}>
      <span>PODWÓJNA PREMIA LITEROWA</span>
    </div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.w2}`}>
      <span>PODWÓJNA PREMIA SŁOWNA</span>
    </div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.w2}`}>
      <span>PODWÓJNA PREMIA SŁOWNA</span>
    </div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l3}`}>
      <span>POTRÓJNA PREMIA LITEROWA</span>
    </div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l3}`}>
      <span>POTRÓJNA PREMIA LITEROWA</span>
    </div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l3}`}>
      <span>POTRÓJNA PREMIA LITEROWA</span>
    </div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l3}`}>
      <span>POTRÓJNA PREMIA LITEROWA</span>
    </div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l2}`}>
      <span>PODWÓJNA PREMIA LITEROWA</span>
    </div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l2}`}>
      <span>PODWÓJNA PREMIA LITEROWA</span>
    </div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l2}`}>
      <span>PODWÓJNA PREMIA LITEROWA</span>
    </div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l2}`}>
      <span>PODWÓJNA PREMIA LITEROWA</span>
    </div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.w3}`}>
      <span>POTRÓJNA PREMIA SŁOWNA</span>
    </div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l2}`}>
      <span>PODWÓJNA PREMIA LITEROWA</span>
    </div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.center}`}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l2}`}>
      <span>PODWÓJNA PREMIA LITEROWA</span>
    </div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.w3}`}>
      <span>POTRÓJNA PREMIA SŁOWNA</span>
    </div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l2}`}>
      <span>PODWÓJNA PREMIA LITEROWA</span>
    </div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l2}`}>
      <span>PODWÓJNA PREMIA LITEROWA</span>
    </div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l2}`}>
      <span>PODWÓJNA PREMIA LITEROWA</span>
    </div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l2}`}>
      <span>PODWÓJNA PREMIA LITEROWA</span>
    </div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l3}`}>
      <span>POTRÓJNA PREMIA LITEROWA</span>
    </div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l3}`}>
      <span>POTRÓJNA PREMIA LITEROWA</span>
    </div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l3}`}>
      <span>POTRÓJNA PREMIA LITEROWA</span>
    </div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l3}`}>
      <span>POTRÓJNA PREMIA LITEROWA</span>
    </div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.w2}`}>
      <span>PODWÓJNA PREMIA SŁOWNA</span>
    </div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.w2}`}>
      <span>PODWÓJNA PREMIA SŁOWNA</span>
    </div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l2}`}>
      <span>PODWÓJNA PREMIA LITEROWA</span>
    </div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.w2}`}>
      <span>PODWÓJNA PREMIA SŁOWNA</span>
    </div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l2}`}>
      <span>PODWÓJNA PREMIA LITEROWA</span>
    </div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.w2}`}>
      <span>PODWÓJNA PREMIA SŁOWNA</span>
    </div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l2}`}>
      <span>PODWÓJNA PREMIA LITEROWA</span>
    </div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.w2}`}>
      <span>PODWÓJNA PREMIA SŁOWNA</span>
    </div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l2}`}>
      <span>PODWÓJNA PREMIA LITEROWA</span>
    </div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l2}`}>
      <span>PODWÓJNA PREMIA LITEROWA</span>
    </div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.w2}`}>
      <span>PODWÓJNA PREMIA SŁOWNA</span>
    </div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.w2}`}>
      <span>PODWÓJNA PREMIA SŁOWNA</span>
    </div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l3}`}>
      <span>POTRÓJNA PREMIA LITEROWA</span>
    </div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l3}`}>
      <span>POTRÓJNA PREMIA LITEROWA</span>
    </div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.w2}`}>
      <span>PODWÓJNA PREMIA SŁOWNA</span>
    </div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.w3}`}>
      <span>POTRÓJNA PREMIA SŁOWNA</span>
    </div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.l2}`}>
      <span>PODWÓJNA PREMIA LITEROWA</span>
    </div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={styles.field}></div>
    <div className={`${styles.field} ${styles.w3}`}>
      <span>POTRÓJNA PREMIA SŁOWNA</span>
    </div>
    <div className={`${styles.field} ${styles.down}`}></div>
    <div className={`${styles.field} ${styles.down}`}></div>
    <div className={`${styles.field} ${styles.down}`}></div>
    <div className={`${styles.field} ${styles.l2}`}>
      <span>PODWÓJNA PREMIA LITEROWA</span>
    </div>
    <div className={`${styles.field} ${styles.down}`}></div>
    <div className={`${styles.field} ${styles.down}`}></div>
    <div className={`${styles.field} ${styles.w3}`}>
      <span>POTRÓJNA PREMIA SŁOWNA</span>
    </div>
  </div>
);

const StyledWrapper = styled.div`
  position: absolute;
  margin-top: 20px;
  min-width: 650px;
  height: 650px;
  width: 650px;
  background-color: #08763b;
  border: 3px solid rgb(34, 51, 51);
`;

const GameArea = styled.div`
  position: absolute;
  top: 30px;
  left: 40px;
  height: calc(100% - 80px);
  width: calc(100% - 80px);
  z-index: 10;
`;

const Board = () => {
  const { moves, actualMoveIndex, actualOptionIndex } = useContext(context);
  const actualOption =
    moves.length &&
    actualMoveIndex !== undefined &&
    moves[actualMoveIndex].choiceOptions[actualOptionIndex];
  const [isVisible, setIsVisible] = useState(true);

  const drawFields = () => {
    return [...Array(15).keys()]
      .map((el) => [...Array(15).keys()].map((el2) => <Field x={el} y={el2} />))
      .flat();
  };
  const drawWord2Fields = () =>
    [
      [1, 1],
      [2, 2],
      [3, 3],
      [4, 4],
      [10, 10],
      [11, 11],
      [12, 12],
      [13, 13],
      [1, 13],
      [2, 12],
      [3, 11],
      [4, 10],
      [10, 4],
      [11, 3],
      [12, 2],
      [13, 1],
    ].map((el) => <Field x={el[0]} y={el[1]} type={"word2"} />);

  return (
    <>
      <StyledWrapper>
        <GameArea>
          <Stage width={570} height={570}>
            <Layer>
              <Rect width={570} height={570} fill="#08763b" opacity={0.75} />
              {drawFields()}
              {drawWord2Fields()}
            </Layer>
          </Stage>
        </GameArea>
      </StyledWrapper>
      {/* <StyledWrapper>
        {boardFields()}
        {actualOption &&
          (<GameArea>
            {getWords(moves, actualMoveIndex)}
            {isMoveWithWord(actualOption) &&
              <Word
                letters={actualOption.word}
                coordinates={actualOption.coordinates}
                actualMoveIndex
              />}
          </GameArea>)}
      </StyledWrapper> */}
    </>
  );
};

export default Board;
