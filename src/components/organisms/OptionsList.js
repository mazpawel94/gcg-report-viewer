import React, { useContext } from 'react';
import styled from "styled-components";
import { Table } from 'semantic-ui-react'

import AppContext from '../../context';

const StyledWrapper = styled.div`
    flex-grow: 1;
    width: 80%;
`;

const Option = ({ params, selected }) => {
    const { evaluate, coordinates, word, movePoints, percent, freeLetters } = params;
    return (
        <Table.Row active={selected}>
            <Table.Cell>{evaluate}</Table.Cell>
            <Table.Cell>{coordinates}</Table.Cell>
            <Table.Cell>{word}</Table.Cell>
            <Table.Cell>{movePoints}</Table.Cell>
            <Table.Cell>{percent}</Table.Cell>
            <Table.Cell>{freeLetters}</Table.Cell>
        </Table.Row>
    )
}
const OptionsList = () => {
    const { moves, actualMoveIndex, actualOptionIndex } = useContext(AppContext);
    const move = moves[actualMoveIndex];
    const optionsElements = move.choiceOptions.map((el, i) => (
        <Option key={i} params={el} selected={i === actualOptionIndex} />
    ))
    return (
        <StyledWrapper>
            <Table basic='very' striped>
                <Table.Header>
                    <Table.Row>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {optionsElements}
                </Table.Body>
            </Table>
        </StyledWrapper>
    );
}

export default OptionsList;
