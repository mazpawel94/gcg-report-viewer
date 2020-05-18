import React from 'react';
import GcgReader from './GcgReader'

const gcgReader = new GcgReader();
const FileInput = () => {
    return (
        <input type="file" id='report-file' onInput={gcgReader.readReport} />
    );
}

export default FileInput;
