import { useCallback } from 'react';
import { useAppContext } from '../context';
import { actionTypes } from '../reducers/gameReducer';
import { findPlayedMove } from '../services/gameService';

const useFullResult = () => {
  const { moves, dispatch } = useAppContext();
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

  const handleCellClick = useCallback((e, index) =>
    dispatch({
      type: actionTypes.setMoveIndex,
      payload: index + parseInt(e.target.dataset.player),
    }),
  );

  return {
    moves,
    realMoves,
    deductedPoints,
    endingPlayerPoints,
    notEndingPlayerPoints,
    handleCellClick,
  };
};

export default useFullResult;
