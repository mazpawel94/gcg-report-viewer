import useGetFromCurrentState from '../../../hooks/useGetFromCurrentState';

const useRack = () => {
  const { actualOption, actualMove } = useGetFromCurrentState();
  if (!actualOption) return null;
  const freeLetters = actualOption.freeLetters.split('');

  const checkAndRemoveLetter = (el) => {
    const index = freeLetters.indexOf(el);
    if (index !== -1) {
      freeLetters.splice(index, 1);
      return false;
    }
    return true;
  };

  const letters = actualMove.letters.split('').map((el) => ({ letter: el, played: checkAndRemoveLetter(el) }));

  return { letters };
};

export default useRack;
