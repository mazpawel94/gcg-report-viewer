import React from 'react';
import styled from 'styled-components';
import WithContext from '../../hoc/withContext';
import Tile from '../molecules/Tile';

const StyledWrapper = styled.div`
    position: absolute;
        top: 30px; 
        left: 117px;
    z-index: 10;

`
const Word = ({ actualMove, letters }) => {
    const lettersDivs = letters.split('').map(el => (
        <Tile letter={el} onBoard />
    ))
    return (
        <StyledWrapper>
            {lettersDivs}
        </StyledWrapper>
    );
}

export default WithContext(Word);