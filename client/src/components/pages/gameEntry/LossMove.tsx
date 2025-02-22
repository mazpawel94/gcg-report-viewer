import React from 'react';
import KonvaArrow from '../../atoms/KonvaArrow';

interface Props {}

const LossMove = (props: Props) => {
//   const handlePutNewLetter = useCallback(
//     (letter) => {
//       if (!inputValue.includes(letter) && !inputValue.includes('?')) return;
//       const isBlank = !inputValue.includes(letter);
//       setCurrentWord((prev) => {
//         const newLetter = isBlank ? letter.toLowerCase() : letter;
//         const wordLength = removeSigns(prev).length + 1;
//         const dots = generateDots(startPosition, wordLength);
//         return `${prev}${newLetter}${dots ? `(${dots})` : ''}`;
//       });
//       setInputValue((prev) => (isBlank ? prev.replace('?', '') : prev.replace(letter, '')));
//     },
//     [inputValue, startPosition.x, startPosition.y, startPosition.vertical, occupiedFields],
//   );

//   const handleKeyDown = (e) => {
//     const charCode = e.keyCode;
//     if (e.target.nodeName === 'INPUT' || charCode < 64 || charCode > 123) return;
//     handlePutNewLetter(e.key.toUpperCase());
//   };

//   useEffect(() => {
//     document.addEventListener('keydown', handleKeyDown);
//     return () => document.removeEventListener('keydown', handleKeyDown);
//   }, [inputValue, startPosition]);

//   return (
//     <>
//       <KonvaArrow
//         x={startPosition.x}
//         y={startPosition.y}
//         vertical={startPosition.vertical}
//         callback={handleArrowClick}
//       />
//     </>
//   );
};

export default LossMove;
