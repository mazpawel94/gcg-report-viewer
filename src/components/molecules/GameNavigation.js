import React, { useContext } from 'react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

import context from '../../context';
import useHandleKeyDown from '../../hooks/useHandleKeyDown';

const StyledWrapper = styled.div`
    margin: auto;
`;

const StyledButton = styled(Button)`
    min-width: 80px;
    margin-left: 20px;
`;
const GameNavigation = () => {
    const { setActualMoveIndex, moves } = useContext(context);
    const { setNextMove, setPreviousMove } = useHandleKeyDown();

    return (
        <StyledWrapper>
            <StyledButton color='teal' icon='fast backward' onClick={() => setActualMoveIndex(0)} />
            <StyledButton color='teal' icon='backward' onClick={setPreviousMove} />
            <StyledButton color='teal' icon='forward' onClick={setNextMove} />
            <StyledButton color='teal' icon='fast forward' onClick={() => setActualMoveIndex(moves.length - 2)} />
        </StyledWrapper>
    );
}

export default GameNavigation;
