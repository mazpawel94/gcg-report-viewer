import React, { Component } from 'react';

import Board from './Board/Board';
import FileInput from './FileInput/FileInput';
import OptionsList from './OptionsList/OptionsList';
import Rack from './Rack/Rack';
import styles from './App.module.scss';
import GameNavigation from './GameNavigation/GameNavigation';
class App extends Component {

    state = {
        moves: [],
        actualMove: undefined,
        actualOption: 0
    }

    fillMovesList = list =>
        this.setState({ moves: [...list], actualMove: 0 });

    setNextMove = () => {
        if (this.state.actualMove + 1 < this.state.moves.length)
            this.setState({ actualMove: this.state.actualMove + 1 });
    };

    setPreviousMove = () => {
        if (this.state.actualMove !== 0)
            this.setState({ actualMove: this.state.actualMove - 1 });
    };
    render() {
        const { actualMove, moves, actualOption } = this.state;
        return (
            <>
                <header className={styles.header}>
                    <FileInput fillMovesFn={this.fillMovesList} />
                </header>
                <main className={styles.main}>
                    <Board />
                    <GameNavigation
                        nextMoveFn={this.setNextMove}
                        prevMoveFn={this.setPreviousMove}
                    />
                    {actualMove !== undefined && (
                        <>
                            <OptionsList move={moves[actualMove]} />
                            <Rack move={moves[actualMove]} actualOption={actualOption} />
                        </>
                    )}
                </main>
            </>
        );
    }
}

export default App;
