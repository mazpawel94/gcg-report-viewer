import React from "react";
import styled from "styled-components";
import { Table } from "semantic-ui-react";

import { findPlayedMove } from "../../services/gameService";
import { useAppContext } from "../../context";
import UseFullResult from "../../hooks/useFullResult";

const StyledWrapper = styled.div`
  position: absolute;
  width: 500px;
  top: 40px;
  left: 10px;
  z-index: 2;
`;

const Cells = ({ moves }) => {
  const { actualMoveIndex } = useAppContext();
  const pointPlayer1 = parseInt(findPlayedMove(moves[0])?.movePoints) || 0;
  const pointPlayer2 = parseInt(findPlayedMove(moves[1])?.movePoints) || 0;
  return (
    <>
      <Table.Cell active={actualMoveIndex === moves[0]?.index} data-player={0}>
        +{pointPlayer1}
      </Table.Cell>
      <Table.Cell active={actualMoveIndex === moves[0]?.index} data-player={0}>
        {pointPlayer1 + parseInt(moves[0]?.pointsBefore)}
      </Table.Cell>
      <Table.Cell active={actualMoveIndex === moves[1]?.index} data-player={1}>
        +{pointPlayer2}
      </Table.Cell>
      <Table.Cell active={actualMoveIndex === moves[1]?.index} data-player={1}>
        {pointPlayer2 + parseInt(moves[1]?.pointsBefore) || ""}
      </Table.Cell>
    </>
  );
};

const Rows = () => {
  const {
    moves,
    realMoves,
    deductedPoints,
    endingPlayerPoints,
    notEndingPlayerPoints,
    handleCellClick,
  } = UseFullResult();
  return (
    <>
      {realMoves.map((move, index) => {
        if (!(index % 2)) {
          return (
            <Table.Row
              key={index}
              textAlign="center"
              onClick={(e) => handleCellClick(e, index)}
              style={ {cursor: "pointer"} }
            >
              <Cells moves={moves.slice(index, index + 2)} />
            </Table.Row>
          );
        } else return null;
      })}
      <Table.Row textAlign="center">
        <Table.Cell data-player={0}>
          {moves.length % 2 ? "-" : "+"}
          {deductedPoints}
        </Table.Cell>
        <Table.Cell data-player={0}>
          {moves.length % 2 ? endingPlayerPoints : notEndingPlayerPoints}
        </Table.Cell>
        <Table.Cell data-player={1}>
          {moves.length % 2 ? "+" : "-"}
          {deductedPoints}
        </Table.Cell>
        <Table.Cell data-player={1}>
          {moves.length % 2 ? notEndingPlayerPoints : endingPlayerPoints}
        </Table.Cell>
      </Table.Row>
    </>
  );
};

const FullResult = () => {
  const { player1, player2 } = useAppContext();

  return (
    <StyledWrapper data-testid="full-result">
      <Table celled structured unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="2" textAlign="center">
              {player1}
            </Table.HeaderCell>
            <Table.HeaderCell colSpan="2" textAlign="center">
              {player2}
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Rows />
        </Table.Body>
      </Table>
    </StyledWrapper>
  );
};

export default FullResult;
