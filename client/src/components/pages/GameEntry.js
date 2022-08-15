import React, { useCallback, useState } from "react";
import styled from "styled-components";

import KonvaArrow from "../atoms/KonvaArrow";
import KonvaBoard from "../organisms/KonvaBoard";
import { RackForInput } from "../organisms/Rack";

const InputArea = styled.div`
  width: 550px;
  height: 80px;
  background: #0c5605;
  position: relative;
  margin: auto;
`;

const HiddenInput = styled.input`
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
`;
const BoardWrapper = styled.div`
  width: 650px;
  height: 650px;
  position: relative;
  margin: auto;
`;
const GameEntry = () => {
  const [inputValue, setInputValue] = useState("elo");
  const [startPosition, setStartPosition] = useState({
    x: 5,
    y: 5,
    vertical: false,
  });
  const handleOnChange = ({ target }) => {
    if (target.value.length > 7) return;
    setInputValue(target.value);
  };

  const handleBoardClick = useCallback((x, y) => {
    setStartPosition((prev) =>
      prev.x === x && prev.y === y
        ? { x, y, vertical: !prev.vertical }
        : { x, y, vertical: false }
    );
  }, []);

  const handleArrowClick = useCallback(() =>
    setStartPosition((prev) => ({ ...prev, vertical: !prev.vertical }))
  );
  return (
    <>
      <InputArea>
        <HiddenInput value={inputValue} onChange={handleOnChange} />
        <RackForInput inputValue={inputValue} />
      </InputArea>
      <BoardWrapper>
        <KonvaBoard handleBoardClick={handleBoardClick}>
          <KonvaArrow
            x={startPosition.x}
            y={startPosition.y}
            vertical={startPosition.vertical}
            callback={handleArrowClick}
          />
        </KonvaBoard>
      </BoardWrapper>
    </>
  );
};

export default GameEntry;
