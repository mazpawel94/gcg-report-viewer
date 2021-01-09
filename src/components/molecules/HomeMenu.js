import React, { useRef, useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import GcgReader from "../../services/GcgReader";
import AppContext from "../../context";
import { findPlayedMove } from "../../services/gameService";

const StyledWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  position: absolute;
  height: 200px;
  line-height: 200px;
  z-index: 2;
`;

const Options = styled.a`
  font-size: 35px;
  display: block;
  color: #3c4a3e;
  text-transform: uppercase;
  position: relative;
  margin-left: 25px;
  margin-right: 25px;
  &:visited {
    color: #3c4a3e;
  }
  &:hover {
    color: #96b364;
  }

  &:hover:before {
    opacity: 1;
    width: 200px;
  }

  &:before {
    position: absolute;
    content: "";
    width: 130px;
    height: 2px;
    background: #3c4a3e;
    bottom: 70px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: 0.4s;
  }
  &:first-of-type::after {
    content: "";
    position: absolute;
    width: 3px;
    height: 80px;
    transform: rotate(15deg);
    background: #3c4a3e;
    top: 60px;
    right: -25px;
  }
`;
const HiddenInput = styled.input`
  display: none;
`;

const HomeMenu = () => {
  const { setMoves, setActualOptionIndex, setActualMoveIndex } = useContext(
    AppContext
  );
  const inputRef = useRef(null);
  const history = useHistory();

  const handleNewFile = (list) => {
    setActualOptionIndex(findPlayedMove(list[0]).index);
    setMoves([...list]);
    setActualMoveIndex(0);
    history.push("/analiza");
  };

  return (
    <StyledWrapper data-testid="home-menu">
      <HiddenInput
        ref={inputRef}
        type="file"
        onInput={(e) => new GcgReader().readReport(e, handleNewFile)}
      />
      <Options href="#" onClick={() => inputRef.current.click()}>
        Analizuj partię
      </Options>
      <Options onClick={() => history.push("/zadania")}>
        Rozwiązuj zadania
      </Options>
    </StyledWrapper>
  );
};

export default HomeMenu;
