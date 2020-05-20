import React, { Component } from 'react';

import Board from './Board/Board';
import FileInput from './FileInput/FileInput';
import OptionsList from './OptionsList/OptionsList'
import Rack from './Rack/Rack';
import styles from './App.module.scss';

class App extends Component {

    state = {
        moves: [],
        actualMove: undefined
    }

    fillMovesList = list =>
        this.setState({ moves: [...list], actualMove: 0 });

    render() {
        const { actualMove, moves } = this.state;
        return (
            <>
                <header className={styles.header}>
                    <FileInput fillMovesFn={this.fillMovesList} />
                </header>
                <main className={styles.main}>
                    <Board />
                    {actualMove !== undefined && (
                        <>
                            <OptionsList move={moves[actualMove]} />
                            <Rack move={moves[actualMove]} actualOption={0} />
                        </>
                    )}
                </main>
            </>
        );
    }
}

export default App;
