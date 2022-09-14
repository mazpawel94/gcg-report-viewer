import { useCallback, useEffect, useState } from "react";
import {
  convertToBoardCoordinates,
  replaceLowerCaseToBlank,
} from "../../../services/gameService";

const findPosition = (startPos, distance) =>
  startPos.vertical
    ? { x: startPos.x, y: startPos.y + distance }
    : { y: startPos.y, x: startPos.x + distance };

const useGameEntry = () => {
  const [inputValue, setInputValue] = useState("");
  const [startPosition, setStartPosition] = useState({
    x: 5,
    y: 5,
    vertical: true,
  });
  const [currentWord, setCurrentWord] = useState("");
  const [moves, setMoves] = useState([]);
  const [occupiedFields, setOccupiedFields] = useState([]);

  const addOcupiedFields = (startPos, wordLength) => {
    const convertedCoords = Array(wordLength)
      .fill({})
      .map((el, i) => findPosition(startPos, i));
    setOccupiedFields((prev) => [...prev, ...convertedCoords]);
  };

  const addMove = useCallback(() => {
    setMoves((prev) => [
      ...prev,
      {
        player: "player",
        word: currentWord,
        coordinates: convertToBoardCoordinates(startPosition),
      },
    ]);
    addOcupiedFields(startPosition, currentWord.replace(/[\(,\)]/g, "").length);
    setCurrentWord("");
    setInputValue("");
  }, [currentWord, startPosition]);

  const handleOnChange = ({ target }) => {
    if (target.value.length > 7) return;
    setInputValue(target.value.toUpperCase());
  };

  const handleBoardClick = useCallback((x, y) => {
    setStartPosition((prev) =>
      prev.x === x && prev.y === y
        ? { x, y, vertical: !prev.vertical }
        : { x, y, vertical: false }
    );
  }, []);

  const handleArrowClick = useCallback(
    () => setStartPosition((prev) => ({ ...prev, vertical: !prev.vertical })),
    []
  );

  const handlePutNewLetter = useCallback(
    (letter) => {
      if (!inputValue.includes(letter) && !inputValue.includes("?")) return;
      const isBlank = !inputValue.includes(letter);
      setCurrentWord((prev) => {
        let dots = "";
        let coordinate = findPosition(startPosition, prev.length);
        while (
          occupiedFields.some(
            (field) => field.x === coordinate.x && field.y === coordinate.y
          )
        ) {
          dots = `${dots}.`;
          coordinate = findPosition(startPosition, prev.length + dots.length);
        }
        if (dots) dots = `(${dots})`;
        return `${prev}${dots}${isBlank ? letter.toLowerCase() : letter}`;
      });
      setInputValue((prev) =>
        isBlank ? prev.replace("?", "") : prev.replace(letter, "")
      );
    },
    [inputValue, startPosition.x, startPosition.y, occupiedFields]
  );

  const resetCurrentWord = useCallback(
    (e) => {
      e?.preventDefault();
      setCurrentWord("");
      setInputValue((prev) => `${prev}${replaceLowerCaseToBlank(currentWord)}`);
    },
    [currentWord]
  );

  const handleKeyDown = (e) => {
    const charCode = e.keyCode;
    if (e.target.nodeName === "INPUT" || charCode < 64 || charCode > 123)
      return;
    handlePutNewLetter(e.key.toUpperCase());
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [inputValue, startPosition]);

  return {
    inputValue,
    startPosition,
    wordPosition: convertToBoardCoordinates(startPosition),
    currentWord,
    moves,
    handleBoardClick,
    handlePutNewLetter,
    handleOnChange,
    handleArrowClick,
    resetCurrentWord,
    addMove,
  };
};

export default useGameEntry;
