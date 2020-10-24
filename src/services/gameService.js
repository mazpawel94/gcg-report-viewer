import React from "react";

import Word from "../components/organisms/Word";

const exceptCoordinates = ["*xch", "xch"];

export const findPlayedMove = (move) =>
    move.choiceOptions.find((opt) => opt.coordinates.includes("*"));

export const getWords = (moves, actualMoveIndex) => {
    return moves.slice(0, actualMoveIndex).map((move, index) => {
        const { word, coordinates } = findPlayedMove(move);
        if (!exceptCoordinates.some((el) => el === coordinates))
            return <Word key={index} letters={word} coordinates={coordinates} />;
        else return null;
    });
};

export const isMoveWithWord = (move) =>
    !exceptCoordinates.some((el) => el === move.coordinates);
