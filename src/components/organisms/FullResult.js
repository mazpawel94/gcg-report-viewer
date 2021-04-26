import React, { useContext } from "react";
import styled from "styled-components";
import { Table } from "semantic-ui-react";

import { findPlayedMove } from "../../services/gameService";
import context from "../../context";
import { actionTypes } from "../../reducers/gameReducer";

const StyledWrapper = styled.div`
  position: absolute;
  width: 500px;
  top: 40px;
  left: 10px;
  z-index: 2;
`;

const fillRow = (moves) => {
  const pointPlayer1 = parseInt(findPlayedMove(moves[0])?.movePoints) || 0;
  const pointPlayer2 = parseInt(findPlayedMove(moves[1])?.movePoints) || 0;
  return (
    <>
      <Table.Cell data-player={0}>+{pointPlayer1}</Table.Cell>
      <Table.Cell data-player={0}>
        {pointPlayer1 + parseInt(moves[0]?.pointsBefore)}
      </Table.Cell>
      <Table.Cell data-player={1}>+{pointPlayer2}</Table.Cell>
      <Table.Cell data-player={1}>
        {pointPlayer2 + parseInt(moves[1]?.pointsBefore) || ""}
      </Table.Cell>
    </>
  );
};

const Rows = () => {
  const { moves, dispatch } = useContext(context);
  const realMoves = moves.slice(0, moves.length - (moves.length % 2 ? 2 : 1));
  const deductedPoints =
    (moves[moves.length - 1].letters -
      moves[moves.length - 2].pointsBefore -
      parseInt(findPlayedMove(moves[moves.length - 2]).movePoints)) /
    2;
  const endingPlayerPoints =
    parseInt(moves[moves.length - 3].pointsBefore) +
    parseInt(findPlayedMove(moves[moves.length - 3]).movePoints) -
    deductedPoints;
  const notEndingPlayerPoints =
    parseInt(moves[moves.length - 2].pointsBefore) +
    parseInt(findPlayedMove(moves[moves.length - 2]).movePoints) +
    deductedPoints;
  return (
    <>
      {realMoves.map((move, index) => {
        if (!(index % 2)) {
          return (
            <Table.Row
              key={index}
              textAlign="center"
              onClick={(e) =>
                dispatch({
                  type: actionTypes.setMoveIndex,
                  payload: index + parseInt(e.target.dataset.player),
                })
              }
            >
              {fillRow(moves.slice(index, index + 2))}
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
  const { moves } = useContext(context);

  return (
    <StyledWrapper data-testid="full-result">
      <Table celled structured unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="2" textAlign="center">
              {moves[0].nick.replace("_", " ")}
            </Table.HeaderCell>
            <Table.HeaderCell colSpan="2" textAlign="center">
              {moves[1].nick.replace("_", " ")}
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
