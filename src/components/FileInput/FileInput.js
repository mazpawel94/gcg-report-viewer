import React from 'react';
import GcgReader from './GcgReader'

import styles from './FileInput.module.scss';
const gcgReader = new GcgReader();
const FileInput = ({ fillMovesFn }) => {
    return (
        <input className={styles.input}
            type="file"
            id='report-file'
            onInput={(e) => gcgReader.readReport(e, fillMovesFn)}
        />
    );
}

export default FileInput;
