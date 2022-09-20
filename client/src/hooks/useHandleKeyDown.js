import { useEffect } from 'react';

import { useAppContext } from '../context';
import { actionTypes } from '../reducers/gameReducer';

const useHandleKeyDown = () => {
  const { dispatch } = useAppContext();

  const handleKeyDown = (e) => {
    if (e.keyCode === 39) dispatch({ type: actionTypes.incrementMoveIndex });
    if (e.keyCode === 37) dispatch({ type: actionTypes.decrementMoveIndex });
    if (e.keyCode === 38) dispatch({ type: actionTypes.decrementOptionIndex });
    if (e.keyCode === 40) dispatch({ type: actionTypes.incrementOptionIndex });
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null;
};

export default useHandleKeyDown;
