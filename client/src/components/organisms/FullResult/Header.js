import React from 'react';
import { Table } from 'semantic-ui-react';
import { useAppContext } from '../../../context';

const Header = () => {
  const { player1, player2 } = useAppContext();

  return (
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
  );
};

export default Header;
