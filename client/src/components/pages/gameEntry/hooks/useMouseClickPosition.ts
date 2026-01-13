import { useState, useEffect } from 'react';

const useMouseClickPosition = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: { clientX: number; clientY: number }) => setPosition({ x: e.clientX, y: e.clientY });

    window.addEventListener('click', updatePosition);

    return () => window.removeEventListener('click', updatePosition);
  }, []);

  return position;
};
export default useMouseClickPosition;
