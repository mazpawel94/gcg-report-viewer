import { useEffect, useRef, useState } from "react";

import { useAppContext } from "../../../context";
import useGetFromCurrentState from "../../../hooks/useGetFromCurrentState";

const useBoard = (asBackground) => {
  const { moves, withoutNewMove } = useAppContext();
  const [boardIsFront, setBoardIsFront] = useState(false);
  const { actualOption } = useGetFromCurrentState();

  const stageRef = useRef(null);

  useEffect(() => {
    if (!asBackground) setTimeout(() => setBoardIsFront(true), 1000);
  }, [asBackground]);

  return { moves, withoutNewMove, boardIsFront, actualOption, stageRef };
};

export default useBoard;
