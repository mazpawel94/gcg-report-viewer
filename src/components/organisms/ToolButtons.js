import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

import Deletion from '../molecules/Deletion';
import FullResult from '../organisms/FullResult';
import useAddDiagramToBase from '../../hooks/useAddDiagramToBase';
import ModalWithDiagramId from '../molecules/ModalWithDiagramId';
const StyledWrapper = styled.div`
    display: flex;
    width: 660px;
    justify-content: space-between;
`;

const StyledButton = styled(Button)`
    background: #aba2a2 !important;
    padding: 12px !important;
`;

const ToolButtons = ({ saveImageBefore }) => {
    const [fullResultIsVisible, setFullResultIsVisible] = useState(false);
    const [deletionIsVisible, setDeletionIsVisible] = useState(false);
    const [diagramId, setDiagramId] = useState('');

    const { addDiagramCallback } = useAddDiagramToBase();

    return (
        <StyledWrapper>
            <StyledButton color='teal' onClick={() => setDeletionIsVisible(!deletionIsVisible)}>Wykreślanka</StyledButton>
            <StyledButton color='teal' onClick={() => setFullResultIsVisible(!fullResultIsVisible)}>Pełny zapis</StyledButton>
            <StyledButton color='teal' onClick={() => saveImageBefore(true)}>Zapisz obraz (przed)</StyledButton>
            <StyledButton color='teal'>Zapisz obraz (po)</StyledButton>
            <StyledButton color='teal' onClick={() => addDiagramCallback().then(res => setDiagramId(res.id))}>Dodaj jako zadanie</StyledButton>
            {deletionIsVisible ? <Deletion /> : null}
            {fullResultIsVisible ? <FullResult /> : null}
            {diagramId ? <ModalWithDiagramId id={diagramId} closeCallback={() => setDiagramId(null)} /> : null}
        </StyledWrapper>
    );
}

export default ToolButtons;
