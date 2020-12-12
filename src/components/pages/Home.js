import React from 'react';
import styled from 'styled-components';

import Board from '../organisms/Board';
import HomeMenu from '../molecules/HomeMenu';

const StyledWrapper = styled.div`
display: flex;
flex-wrap: wrap;
`;


const Home = () => {

    return (
        <StyledWrapper>
            <HomeMenu />
            <Board />
        </StyledWrapper>
    );
}

export default Home;
