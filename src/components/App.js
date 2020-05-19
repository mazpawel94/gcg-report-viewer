import React, { Component } from 'react';

import Board from './Board/Board';
import FileInput from './FileInput/FileInput';


class App extends Component {

    state = {
        moves: [],
        actualMove: undefined
    }

    fillMovesList = list => {
        console.log(list);
        this.setState({ moves: [...list] });
    }


    render() {
        return (
            <>
                <FileInput fillMovesFn={this.fillMovesList} />
                <Board />
            </>
        );
    }
}

export default App;
