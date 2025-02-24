import React from 'react';
import { Table } from 'semantic-ui-react';
import { IApprovedMove, useGameEntryContext } from '../../../contexts/GameEntryContext';

const Option = ({ params }: { params: IApprovedMove }) => {
  const { index, coordinates, word, points, sumPoints, letters } = params;
  return (
    <Table.Row>
      <Table.Cell> {`>${index! % 2 ? 'player_2' : 'player_1'}`}</Table.Cell>
      <Table.Cell>{coordinates}</Table.Cell>
      <Table.Cell>{letters}</Table.Cell>
      <Table.Cell>{word}</Table.Cell>
      <Table.Cell>+ {points}</Table.Cell>
      <Table.Cell>{sumPoints}</Table.Cell>
    </Table.Row>
  );
};

const MovesList = () => {
  const { approvedMoves } = useGameEntryContext();
  const optionsElements = approvedMoves.map((move) => <Option key={move.index} params={move} />);
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
