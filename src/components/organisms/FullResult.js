import React, { useContext } from "react";
import { Table } from "semantic-ui-react";

import { findPlayedMove } from "../../services/gameService";
import context from "../../context";

const fillRow = (moves) => {
    const pointPlayer1 = parseInt(findPlayedMove(moves[0])?.movePoints) || 0;
    const pointPlayer2 = parseInt(findPlayedMove(moves[1])?.movePoints) || 0;
    return (
        <>
            <Table.Cell>+{pointPlayer1}</Table.Cell>
            <Table.Cell>{pointPlayer1 + parseInt(moves[0]?.pointsBefore)}</Table.Cell>
            <Table.Cell>+{pointPlayer2}</Table.Cell>
            <Table.Cell>{pointPlayer2 + parseInt(moves[1]?.pointsBefore)}</Table.Cell>
        </>
    );
};
const rows = (moves) =>
    moves.map((move, index) => {
        if (!(index % 2)) {
            return (
                <Table.Row key={index} textAlign="center">
                    {fillRow(moves.slice(index, index + 2))}
                </Table.Row>
            );
        }
    });

const FullResult = () => {
    const { moves } = useContext(context);

    return (
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

            <Table.Body>{rows(moves)}</Table.Body>
        </Table>
    );
};

export default FullResult;
