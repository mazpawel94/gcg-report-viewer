import React from "react";

import Word from "../components/organisms/Word";

const exceptCoordinates = ["*xch", "xch"];

const isLossMove = (moves, moveIndex) =>
    moves[moveIndex].pointsBefore === moves[moveIndex + 2].pointsBefore;

const isExchange = (coordinates) =>
    exceptCoordinates.some((el) => el === coordinates);

export const findPlayedMove = (move) =>
    move.choiceOptions.find((opt) => opt.coordinates.includes("*"));

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
export const getCurrentMoves = (moves, actualMoveIndex) =>
    moves.slice(0, actualMoveIndex);

export const getCurrentWords = (moves, actualMoveIndex) =>
    getCurrentMoves(moves, actualMoveIndex).map((move, index) => {
        const { word, coordinates } = findPlayedMove(move);
        if (isExchange(coordinates) || isLossMove(moves, index)) return null;
        return <Word key={index} letters={word} coordinates={coordinates} />;
    });

export const getCurrentUsedTiles = (moves, actualMoveIndex) =>
    getCurrentMoves(moves, actualMoveIndex)
        .map((move) => findPlayedMove(move))
        .reduce(
            (acc, { word }) => [
                ...acc,
                ...word.replaceAll(/\([^)]+\)/g, "").split(""),
            ],
            ""
        );

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
