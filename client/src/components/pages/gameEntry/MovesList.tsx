import React from 'react';
import { Table } from 'semantic-ui-react';
import { IApprovedMove, useGameEntryContext } from '../../../contexts/GameEntryContext';

const Option = ({ params, nick }: { params: IApprovedMove; nick: string }) => {
  const { index, coordinates, word, points, sumPoints, letters } = params;
  return (
    <Table.Row>
      <Table.Cell> {nick}</Table.Cell>
      <Table.Cell>{coordinates}</Table.Cell>
      <Table.Cell>{letters}</Table.Cell>
      <Table.Cell>{word}</Table.Cell>
      <Table.Cell>+ {points}</Table.Cell>
      <Table.Cell>{sumPoints}</Table.Cell>
    </Table.Row>
  );
};

const MovesList = () => {
  const { approvedMoves, playersName } = useGameEntryContext();
  const optionsElements = approvedMoves.map((move) => (
    <Option key={move.index} params={move} nick={move.index! % 2 ? playersName[1] : playersName[0]} />
  ));
  return (
    <Table basic="very" striped unstackable>
      <Table.Header>
        <Table.Row></Table.Row>
      </Table.Header>
      <Table.Body>{optionsElements}</Table.Body>
    </Table>
  );
};

export default MovesList;
