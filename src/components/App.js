import React, { Component } from 'react';
import styled from 'styled-components';

import Board from './Board/Board';
import FileInput from './FileInput/FileInput';
import OptionsList from './organisms/OptionsList';
import Rack from './organisms/Rack';
import GameNavigation from '../components/molecules/GameNavigation';
import AppContext from '../context';

const StyledWrapper = styled.div`
display: flex;
flex-wrap: wrap;
`;
const StyledHeader = styled.div`
width: 100vw;
`;

const BoardWrapper = styled.div`
display: flex;
flex-direction: column;
`;
const MoveContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    flex-grow: 1;
`;

class App extends Component {

    state = {
        moves: [],
        actualMove: undefined,
        actualOption: 0
    }

    findPlayedOption = (moveIndex, moves = this.state.moves) =>
        moves[moveIndex].choiceOptions.findIndex(opt => opt.coordinates.includes('*'))

    fillMovesList = list =>
        this.setState({
            moves: [...list],
            actualMove: 0,
            actualOption: this.findPlayedOption(0, [...list])
        });

    setNextMove = () => {
        const { actualMove, moves } = this.state;
        if (actualMove + 1 < moves.length)
            this.setState({
                actualMove: actualMove + 1,
                actualOption: this.findPlayedOption(actualMove + 1)
            });
    };

    setPreviousMove = () => {
        const { actualMove } = this.state;
        if (actualMove !== 0)
            this.setState({
                actualMove: actualMove - 1,
                actualOption: this.findPlayedOption(actualMove - 1)
            });
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
        const { actualMove } = this.state;
        return (
            <AppContext.Provider value={this.state}>
                <StyledWrapper>
                    <StyledHeader>
                        <FileInput fillMovesFn={this.fillMovesList} />
                    </StyledHeader>
                    <BoardWrapper>
                        <Board />
                        <GameNavigation
                            nextMoveFn={this.setNextMove}
                            prevMoveFn={this.setPreviousMove}
                        />
                    </BoardWrapper>
                    {actualMove !== undefined && (
                        <MoveContent>
                            <OptionsList />
                            <Rack />
                        </MoveContent>
                    )}
                </StyledWrapper>
            </AppContext.Provider>
        );
    }
}

export default App;
