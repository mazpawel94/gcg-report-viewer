import { useAppContext } from "../context";
import useGetFromCurrentState from "./useGetFromCurrentState";

const useAddDiagramToBase = () => {
  const { actualMoveIndex } = useAppContext();
  const { currentMoves, actualMove } = useGetFromCurrentState();
  const addDiagramCallback = async () => {
    // const id = await fetch('/api/', {
    //     method: 'POST',
    //     body: {
    //         moves,
    //         index: actualMoveIndex
    //     }
    // })
    const objectToSend = {
      moves: currentMoves,
      letters: actualMove.letters,
      index: actualMoveIndex,
      solutions: actualMove,
    };
    console.log(objectToSend);
    return new Promise((resolve, reject) => {
      resolve({ id: "476" });
    });
  };

  return { addDiagramCallback };
};

export default useAddDiagramToBase;
