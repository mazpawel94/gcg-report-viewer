import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css'
import AppContext from '../context';
import GameplayAnalysed from '../components/pages/GameplayAnalysed';

const App = () => {
    const [moves, setMoves] = useState([]);
    const [actualMoveIndex, setActualMoveIndex] = useState(undefined);
    const [actualOptionIndex, setActualOptionIndex] = useState(0);

    const getActualMove = () => moves[actualMoveIndex];
    const getActualOption = () => moves[actualMoveIndex][actualOptionIndex];

    const context = {
        moves,
        setMoves,
        actualMoveIndex,
        setActualMoveIndex,
        actualOptionIndex,
        setActualOptionIndex,
        getActualMove,
        getActualOption
    }
    return (
        <AppContext.Provider value={context}>
            <GameplayAnalysed />
        </AppContext.Provider>

    );
}

export default App;
