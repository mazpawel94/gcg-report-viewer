import React from "react";

import Word from "../components/organisms/Word";

const exceptCoordinates = ["*xch", "xch"];

const isLossMove = (moves, moveIndex) =>
    moves[moveIndex].pointsBefore === moves[moveIndex + 2].pointsBefore

const isExchange = coordinates => exceptCoordinates.some((el) => el === coordinates)

export const findPlayedMove = (move) =>
    move.choiceOptions.find((opt) => opt.coordinates.includes("*"));

export const getWords = (moves, actualMoveIndex) => {
    return moves.slice(0, actualMoveIndex).map((move, index) => {
        const { word, coordinates } = findPlayedMove(move);
        if (isExchange(coordinates) || isLossMove(moves, index))
            return null;
        return <Word key={index} letters={word} coordinates={coordinates} />;
    });
};

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
    return (index) =>
        bracketsPairs.some((pair) => pair.start < index && pair.end > index);
};