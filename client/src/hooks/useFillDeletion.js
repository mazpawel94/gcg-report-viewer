import { useEffect, useState } from 'react';

import { findPlayedMove } from '../services/gameService';
import useGetFromCurrentState from './useGetFromCurrentState';

const polishLetters = ['ą', 'ć', 'ę', 'ł', 'ń', 'ó', 'ś', 'ż', 'ź'];

const findBlanks = (word) =>
  word
    .split('')
    .map((char) => ((char >= 'a' && char <= 'z') || polishLetters.includes(char) ? '?' : null))
    .filter((el) => el);

const useFillDeletion = () => {
  const [usedLetters, setUsedLetters] = useState([]);
  const { currentMoves, isLossMove } = useGetFromCurrentState();

  useEffect(() => {
    const letters = currentMoves
      .filter((el, i) => !isLossMove(i))
      .map((move) => findPlayedMove(move))
      .reduce((acc, { word }) => [...acc, ...word.replaceAll(/\([^)]+\)/g, '').split(''), ...findBlanks(word)], '');
    setUsedLetters([...letters]);
  }, [currentMoves.length]);

  return { usedLetters };
};

export default useFillDeletion;
