import { Table } from "semantic-ui-react";
import useFullResult from "../../../hooks/useFullResult";
import Cells from "./Cells";

const Rows = () => {
  const {
    moves,
    realMoves,
    deductedPoints,
    endingPlayerPoints,
    notEndingPlayerPoints,
    handleCellClick,
  } = useFullResult();
  return (
    <>
      {realMoves.map((move, index) => {
        if (!(index % 2)) {
          return (
            <Table.Row
              key={index}
              textAlign="center"
              onClick={(e) => handleCellClick(e, index)}
              style={{ cursor: "pointer" }}
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

export default Rows;
