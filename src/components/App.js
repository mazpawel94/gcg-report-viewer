import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import AppContext from '../context';
import Home from '../components/pages/Home';
import GameplayAnalysed from '../components/pages/GameplayAnalysed';
import MainTemplate from '../components/templates/MainTemplate';

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
        <MainTemplate>
            <Router>
                <AppContext.Provider value={context}>
                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        <Route path='/zadania'>
                            <GameplayAnalysed />
                        </Route>
                        <Route path='/analiza'>
                            <GameplayAnalysed />
                        </Route>
                    </Switch>
                </AppContext.Provider>
            </Router>
        </MainTemplate>
    );
}

export default App;
