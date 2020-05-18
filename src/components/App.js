import React, { Component } from 'react';

import Board from './Board/Board';
import FileInput from './FileInput/FileInput';

class App extends Component {
    render() {
        return (
            <div>
                <FileInput />
                <Board />
            </div>
        );
    }
}

export default App;
