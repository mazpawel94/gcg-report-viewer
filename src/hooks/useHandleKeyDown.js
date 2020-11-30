import { useEffect, useContext } from 'react';

import { findPlayedMove } from '../services/gameService';
import AppContext from '../context';

const useHandleKeyDown = () => {
    const { moves, actualMoveIndex, actualOptionIndex, setActualMoveIndex, setActualOptionIndex } = useContext(AppContext);

    const setNextMove = () => {
        if (actualMoveIndex + 1 < moves.length) {
            const prevIndex = actualMoveIndex;
            setActualOptionIndex(findPlayedMove(moves[prevIndex + 1])?.index);
            setActualMoveIndex(prevIndex + 1);
        }
    };

    const setPreviousMove = () => {
        if (actualMoveIndex !== 0) {
            const prevIndex = actualMoveIndex;
            setActualOptionIndex(findPlayedMove(moves[prevIndex - 1]).index);
            setActualMoveIndex(prevIndex - 1);
        }
    };

    const setNextOption = () => {
        if (actualOptionIndex + 1 < moves[actualMoveIndex].choiceOptions.length)
            setActualOptionIndex(actualOptionIndex + 1);
    };

    const setPreviousOption = () => {
        if (actualOptionIndex !== 0)
            setActualOptionIndex(actualOptionIndex - 1);
    };

    const handleKeyDown = e => {
        e.preventDefault();
        if (e.keyCode === 39)
            setNextMove();
        if (e.keyCode === 37)
            setPreviousMove();
        if (e.keyCode === 38)
            setPreviousOption();
        if (e.keyCode === 40)
            setNextOption();
    }

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        }
    });

    return ({
        setNextMove,
        setPreviousMove
    })
};




export default useHandleKeyDown;
