import React from 'react';
import styled from 'styled-components';

import Board from '../organisms/Board';
import FileInput from '../atoms/FileInput';

const StyledWrapper = styled.div`
display: flex;
flex-wrap: wrap;
`;
const StyledHeader = styled.div`
width: 100vw;
z-index: 2;
`;

const BoardWrapper = styled.div`
display: flex;
flex-direction: column;
min-width: 650px;
position: relative;
`;


const Home = () => {

    return (
        <StyledWrapper>
            <StyledHeader>
                <FileInput />
            </StyledHeader>
            <Board />
        </StyledWrapper>
    );
}

export default Home;
