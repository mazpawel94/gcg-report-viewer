import { useEffect, useState } from 'react';

const useHandleResize = () => {
  const [fieldSize, setFieldSize] = useState(38);

  const changeBoardSize = () => {
    const newSize = window.outerWidth > 650 ? 38 : Math.floor((window.outerWidth - 80) / 15);
    console.log(window.outerWidth, newSize);
    setFieldSize(newSize);
  };

  useEffect(() => {
    changeBoardSize();
    window.addEventListener('resize', changeBoardSize);
    return () => window.removeEventListener('resize', changeBoardSize);
  }, []);

  return { fieldSize };
};

export default useHandleResize;
