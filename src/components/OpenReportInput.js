import React from 'react';

const OpenReportInput = (props) => {
    return (
        <input type="file" id='report-file' onInput={props.readReport} />
    );
}

export default OpenReportInput;

/* <input type="file" name="report-file" id="report-file" /> */