import { useAppContext } from '../context';

const useGetFromCurrentState = () => {
  const { moves, actualMoveIndex, actualOptionIndex } = useAppContext();

  const actualMove = moves?.[actualMoveIndex];
  const actualOption = moves?.[actualMoveIndex]?.choiceOptions[actualOptionIndex];
  const currentMoves = moves?.slice(0, actualMoveIndex);
  const isLossMove = (moveIndex) => moves[moveIndex].pointsBefore === moves[moveIndex + 2].pointsBefore;
  return { moves, actualMove, actualOption, currentMoves, isLossMove };
};

export default useGetFromCurrentState;
