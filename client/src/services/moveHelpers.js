export const letterOnBoard = /\([^\)]+\)/g;
export const blank = /[a-z ąęóśłżźćń]/g;

export const findFreeLetters = (move, letters) => {
  const cleanMoveArray = move.replace(letterOnBoard, '').replace(blank, '?').split('');
  const lettersArray = letters.split('');
  cleanMoveArray.forEach((letter) => lettersArray.splice(lettersArray.indexOf(letter), 1));
  return lettersArray.join('');
};
