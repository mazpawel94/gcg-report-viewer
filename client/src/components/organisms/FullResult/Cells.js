import { Table } from 'semantic-ui-react';
import { useAppContext } from '../../../context';
import { findPlayedMove } from '../../../services/gameService';

const OneMoveCells = ({ move, playerIndex }) => {
  const { actualMoveIndex } = useAppContext();

  const points = parseInt(findPlayedMove(move)?.movePoints) || 0;
  const active = actualMoveIndex === move.index;
  const lastMove = move.pointsBefore === undefined;

  return (
    <>
      <Table.Cell active={active} data-player={lastMove ? 0 : playerIndex}>
        {lastMove ? '' : `+${points}`}
      </Table.Cell>
      <Table.Cell active={active} data-player={lastMove ? 0 : playerIndex}>
        {lastMove ? '' : points + parseInt(move.pointsBefore)}
      </Table.Cell>
    </>
  );
};
const Cells = ({ moves }) => {
  return (
    <>
      <OneMoveCells move={moves[0]} playerIndex={0} />
      <OneMoveCells move={moves[1]} playerIndex={1} />
    </>
  );
};

export default Cells;
