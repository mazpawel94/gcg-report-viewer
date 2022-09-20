import { useEffect, useState } from 'react';

import { useAppContext } from '../context';
import { actionTypes } from '../reducers/gameReducer';

const handleExport = (stageRef) => {
  const link = document.createElement('a');
  link.download = `image.png`;
  link.href = stageRef.current.toDataURL();
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const useExportAsImage = () => {
  const { withoutNewMove, dispatch } = useAppContext();
  const [called, setCalled] = useState(false);
  const [stageRef, setStageRef] = useState(false);
  useEffect(() => {
    if (called) {
      handleExport(stageRef);
      setCalled(false);
      dispatch({ type: actionTypes.setWithoutNewMove, payload: false });
    }
  }, [withoutNewMove, called]);

  const getImage = (stageRef, option) => {
    dispatch({ type: actionTypes.setWithoutNewMove, payload: option });
    setCalled(true);
    setStageRef(stageRef);
  };
  return [getImage];
};

export default useExportAsImage;
