import React, { Component } from 'react';

import Board from './Board';
import OpenReportInput from './OpenReportInput';
import GcgReader from './GcgReader'

const gcgReader = new GcgReader();
class App extends Component {
    render() {
        return (
            <div>
                <OpenReportInput readReport={gcgReader.readReport} />
                <Board />
            </div>
        );
    }
}

export default App;
