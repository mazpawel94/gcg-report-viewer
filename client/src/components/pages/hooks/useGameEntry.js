import React, { useCallback, useEffect, useState } from "react";
import {
  convertToBoardCoordinates,
  replaceLowerCaseToBlank,
} from "../../../services/gameService";

const useGameEntry = () => {
  const [inputValue, setInputValue] = useState("");
  const [startPosition, setStartPosition] = useState({
    x: 5,
    y: 5,
    vertical: true,
  });
  const [currentWord, setCurrentWord] = useState("");

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

  const handleArrowClick = useCallback(() =>
    setStartPosition((prev) => ({ ...prev, vertical: !prev.vertical }))
  );

  const handlePutNewLetter = useCallback(
    (letter) => {
      if (!inputValue.includes(letter) && !inputValue.includes("?")) return;
      const isBlank = !inputValue.includes(letter);
      setCurrentWord(
        (prev) => `${prev}${isBlank ? letter.toLowerCase() : letter}`
      );
      setInputValue((prev) =>
        isBlank ? prev.replace("?", "") : prev.replace(letter, "")
      );
    },
    [inputValue]
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
  }, [inputValue]);

  return {
    inputValue,
    startPosition,
    wordPosition: convertToBoardCoordinates(startPosition),
    currentWord,
    handleBoardClick,
    handlePutNewLetter,
    handleOnChange,
    handleArrowClick,
    resetCurrentWord,
  };
};

export default useGameEntry;
