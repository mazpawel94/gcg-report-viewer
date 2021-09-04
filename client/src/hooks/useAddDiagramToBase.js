import { useAppContext } from "../context";
import useGetFromCurrentState from "./useGetFromCurrentState";

const useAddDiagramToBase = () => {
  const { actualMoveIndex } = useAppContext();
  const { currentMoves, actualMove } = useGetFromCurrentState();
  const addDiagramCallback = async () => {
    const objectToSend = {
      moves: currentMoves,
      letters: actualMove.letters,
      index: actualMoveIndex,
      solutions: actualMove,
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
