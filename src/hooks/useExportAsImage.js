import { useEffect, useContext, useState } from "react";

import Context from "../context";

const handleExport = (stageRef) => {
  const link = document.createElement("a");
  link.download = `image.png`;
  link.href = stageRef.current.toDataURL();
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const useExportAsImage = () => {
  const { withoutNewMove, setWithoutNewMove } = useContext(Context);
  const [called, setCalled] = useState(false);
  const [stageRef, setStageRef] = useState(false);
  useEffect(() => {
    if (called) {
      handleExport(stageRef);
      setCalled(false);
      setWithoutNewMove(false);
    }
  }, [withoutNewMove, called]);

  const getImage = (stageRef, option) => {
    setWithoutNewMove(option);
    setCalled(true);
    setStageRef(stageRef);
  };
  return [getImage];
};

export default useExportAsImage;
