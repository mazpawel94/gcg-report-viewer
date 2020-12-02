import React, { useContext } from "react";
import styled from "styled-components";
import AppContext from "../../context";
import { useHistory } from "react-router-dom";
import GcgReader from "../../services/GcgReader";
import { findPlayedMove } from "../../services/gameService";

const StyledInput = styled.input`
  display: block;
  margin: auto;
`;

const FileInput = () => {
    const { setMoves, setActualOptionIndex, setActualMoveIndex } = useContext(
        AppContext
    );
    const history = useHistory();
    const fillMovesList = (list) => {
        setActualOptionIndex(findPlayedMove(list[0]).index);
        setMoves([...list]);
        setActualMoveIndex(0);
        history.push("/analiza");
    };
    return (
        <StyledInput
            type="file"
            onInput={(e) => new GcgReader().readReport(e, fillMovesList)}
        />
    );
};

export default FileInput;
