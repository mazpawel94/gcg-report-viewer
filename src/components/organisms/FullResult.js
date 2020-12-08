import React, { useContext } from "react";
import styled from "styled-components";
import { Table } from "semantic-ui-react";

import { findPlayedMove } from "../../services/gameService";
import context from "../../context";

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
                {pointPlayer2 + parseInt(moves[1]?.pointsBefore)}
            </Table.Cell>
        </>
    );
};

const Rows = () => {
    const { moves, setActualMoveIndex } = useContext(context);

    return (
        <>
            {moves.map((move, index) => {
                if (!(index % 2)) {
                    return (
                        <Table.Row
                            key={index}
                            textAlign="center"
                            onClick={(e) =>
                                setActualMoveIndex(index + parseInt(e.target.dataset.player))
                            }
                        >
                            {fillRow(moves.slice(index, index + 2))}
                        </Table.Row>
                    );
                }
                return null;
            })}
        </>
    );
};

const FullResult = () => {
    const { moves } = useContext(context);

    return (
        <StyledWrapper>
            <Table celled structured>
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