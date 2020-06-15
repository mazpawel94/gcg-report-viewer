import React, { Component } from 'react';

import Board from './Board/Board';
import FileInput from './FileInput/FileInput';
import OptionsList from './organisms/OptionsList';
import Rack from './organisms/Rack';
import styles from './App.module.scss';
import GameNavigation from '../components/molecules/GameNavigation';
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

    setNextOption = () => {
        const { actualOption, actualMove, moves } = this.state;
        if (actualOption + 1 < moves[actualMove].choiceOptions.length)
            this.setState({ actualOption: actualOption + 1 });
    };

    setPreviousOption = () => {
        if (this.state.actualOption !== 0)
            this.setState({ actualOption: this.state.actualOption - 1 });
    };

    handleKeyDown = e => {
        e.preventDefault();
        if (e.keyCode === 39)
            this.setNextMove();
        if (e.keyCode === 37)
            this.setPreviousMove();
        if (e.keyCode === 38)
            this.setPreviousOption();
        if (e.keyCode === 40)
            this.setNextOption();
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);
    }
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
