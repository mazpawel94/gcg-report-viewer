import React from 'react';
import GcgReader from './GcgReader'

const gcgReader = new GcgReader();
const FileInput = ({ fillMovesFn }) => {
    return (
        <input
            type="file"
            id='report-file'
            onInput={(e) => gcgReader.readReport(e, fillMovesFn)}
        />
    );
}

export default FileInput;
