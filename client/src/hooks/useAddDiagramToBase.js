import { useAppContext } from "../context";
import { findPlayedMove, findBestMove } from "../services/gameService";
import useGetFromCurrentState from "./useGetFromCurrentState";

const compressMovesList = (moves) =>
  moves.map((move) => ({
    index: move.index,
    choiceOptions: findPlayedMove(move),
  }));

const useAddDiagramToBase = () => {
  const { actualMoveIndex } = useAppContext();
  const { currentMoves, actualMove } = useGetFromCurrentState();
  const addDiagramCallback = async () => {
    const objectToSend = {
      moves: compressMovesList(currentMoves),
      letters: actualMove.letters,
      index: actualMoveIndex,
      solutions: findBestMove(actualMove),
    };

    const id = await fetch("/diagram", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        indexMove: actualMoveIndex,
        words: JSON.stringify(objectToSend),
      }),
    }).then((res) => res.text());
    return id;
  };

  return { addDiagramCallback };
};

export default useAddDiagramToBase;
