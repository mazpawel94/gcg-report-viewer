const exceptCoordinates = ["*xch", "xch"];

export const isExchange = (coordinates) =>
  exceptCoordinates.some((el) => el === coordinates);

export const findPlayedMove = (move) => {
  return move?.choiceOptions?.find((opt) => opt.coordinates.includes("*"));
};

export const findBestMove = (move) => {
  return move?.choiceOptions?.find((opt) => opt.evaluate === "best");
};

export const setPosition = (coordinates) => {
  const coord = coordinates
    .split("")
    .filter((el) => el !== "*")
    .join("");
  if (coord.slice(-1) !== coord.slice(-1).toLowerCase())
    //horizontal
    return {
      x: coord.slice(-1).charCodeAt() - 65,
      y: coord.slice(0, -1) - 1,
      verticle: false,
    };
  else
    return {
      x: coord[0].charCodeAt() - 65,
      y: coord.slice(1) - 1,
      verticle: true,
    };
};

export const replaceLowerCaseToBlank = (word) =>
  word.replace(/[a-z,ą,ę,ć,ś,ł, ń, ó, ż,ź]/g, "?");
  
export const convertToBoardCoordinates = ({ x, y, vertical }) =>
  vertical
    ? `${String.fromCharCode(x + 65)}${y + 1}`
    : `${y + 1}${String.fromCharCode(x + 65)}`;

export const isMoveWithWord = (move) =>
  !exceptCoordinates.some((el) => el === move.coordinates);

export const betweenBracketsValidator = (letters) => {
  const bracketsPairs = [];
  const findPair = (i) => {
    const start = letters.indexOf("(", i);
    const end = letters.indexOf(")", i + 1);
    if (end !== -1) {
      bracketsPairs.push({ start, end });
      findPair(end);
    }
  };
  findPair(0);
  const isBetween = (index) =>
    bracketsPairs.some((pair) => pair.start < index && pair.end > index);
  const booleanArray = letters
    .split("")
    .map((letter, i) =>
      ["(", ")"].includes(letter) ? undefined : isBetween(i)
    )
    .filter((el) => el !== undefined);
  return booleanArray;
};
