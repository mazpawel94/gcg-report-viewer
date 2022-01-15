import { findPlayedMove, findBestMove } from "../services/gameService";
import useGetFromCurrentState from "./useGetFromCurrentState";

const compressMovesList = (moves) =>
  moves.map((move) => ({
    index: move.index,
    choiceOptions: findPlayedMove(move),
  }));

const useAddDiagramToBase = () => {
  const { currentMoves, actualMove } = useGetFromCurrentState();
  const addDiagramCallback = async (diagramIsPublic, tags) => {
    const id = await fetch("/diagram", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        diagramIsPublic,
        letters: actualMove.letters,
        words: JSON.stringify(compressMovesList(currentMoves)),
        solution: JSON.stringify(findBestMove(actualMove)),
        tags,
      }),
    }).then((res) => res.text());
    return id;
  };

  return { addDiagramCallback };
};

export default useAddDiagramToBase;
