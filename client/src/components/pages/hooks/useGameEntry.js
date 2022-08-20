import React, { useCallback, useEffect, useState } from "react";
import { convertToBoardCoordinates } from "../../../services/gameService";

const useGameEntry = () => {
  const [inputValue, setInputValue] = useState("elo");
  const [startPosition, setStartPosition] = useState({
    x: 5,
    y: 5,
    vertical: true,
  });
  const [currentWord, setCurrentWord] = useState("");
  const handleOnChange = ({ target }) => {
    if (target.value.length > 7) return;
    setInputValue(target.value);
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

  const handlePutNewLetter = useCallback((letter) => {
    setCurrentWord((prev) => `${prev}${letter}`);
    setInputValue((prev) => prev.replace(letter.toLowerCase(), ""));
  }, []);

  const handleKeyDown = (e) => {
    const charCode = e.keyCode;
    if (e.target.nodeName === "INPUT" || charCode < 64 || charCode > 123)
      return;
    handlePutNewLetter(e.key.toUpperCase());
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return {
    inputValue,
    startPosition,
    wordPosition: convertToBoardCoordinates(startPosition),
    currentWord,
    handleBoardClick,
    handlePutNewLetter,
    handleOnChange,
    handleArrowClick,
  };
};

export default useGameEntry;
