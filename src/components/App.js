import React, { useState } from 'react';

import AppContext from '../context';
import GameplayAnalysed from '../components/pages/GameplayAnalysed';


const App = () => {
    const [moves, setMoves] = useState([]);
    const [actualMoveIndex, setActualMoveIndex] = useState(undefined);
    const [actualOptionIndex, setActualOptionIndex] = useState(0);

    const context = {
        moves,
        setMoves,
        actualMoveIndex,
        setActualMoveIndex,
        actualOptionIndex,
        setActualOptionIndex
    }
    return (
        <AppContext.Provider value={context}>
            <GameplayAnalysed />
        </AppContext.Provider>

    );
}

export default App;
