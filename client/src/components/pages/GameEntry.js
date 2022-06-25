import React, { useState } from "react";
import styled from "styled-components";

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

const GameEntry = () => {
  const [inputValue, setInputValue] = useState("elo");
  const handleOnChange = ({ target }) => {
    if (target.value.length > 7) return;
    setInputValue(target.value);
  };

  return (
    <InputArea>
      <HiddenInput value={inputValue} onChange={handleOnChange} />
      <RackForInput inputValue={inputValue} />
    </InputArea>
  );
};

export default GameEntry;
