import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

import Deletion from '../molecules/Deletion';
import FullResult from '../organisms/FullResult';

const StyledWrapper = styled.div`
    display: flex;
`;

const StyledButton = styled(Button)`
    background: #0075AC;
`;

const ToolButtons = ({ saveImageBefore }) => {
    const [fullResultIsVisible, setFullResultIsVisible] = useState(false);
    const [deletionIsVisible, setDeletionIsVisible] = useState(false);
    return (
        <StyledWrapper>
            <StyledButton color='teal' onClick={() => setDeletionIsVisible(!deletionIsVisible)}>Wykreślanka</StyledButton>
            <StyledButton color='teal' onClick={() => setFullResultIsVisible(!fullResultIsVisible)}>Pełny zapis</StyledButton>
            <StyledButton color='teal' onClick={() => saveImageBefore(true)}>Zapisz jako obrazek (przed)</StyledButton>
            <StyledButton color='teal'>Zapisz jako obrazek (po)</StyledButton>
            {deletionIsVisible ? <Deletion /> : null}
            {fullResultIsVisible ? <FullResult /> : null}
        </StyledWrapper>
    );
}

export default ToolButtons;
