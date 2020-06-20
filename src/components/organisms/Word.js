import React from 'react';
import styled, { css } from 'styled-components';
import WithContext from '../../hoc/withContext';
import Tile from '../molecules/Tile';

const StyledWrapper = styled.div`
    position: absolute;
    top: ${({ y }) => `calc(${y} * 100% / 15)`}; 
    left: ${({ x }) => `calc(${x} * 100% / 15)`}; 
    display: flex;

    ${({ verticle }) => verticle && css`
        flex-direction: column;
    `}

`

const Word = ({ actualMove, letters, coordinates }) => {

    const setPosition = () => {
        const coord = coordinates.split('').filter(el => el !== '*').join('');
        if (coord.slice(-1) !== coord.slice(-1).toLowerCase()) //horizontal
            return ({
                x: coord.slice(-1).charCodeAt() - 65,
                y: coord.slice(0, -1) - 1,
                verticle: false
            })
        else return ({
            x: coord[0].charCodeAt() - 65,
            y: coord.slice(1) - 1,
            verticle: true
        })
    };
    const lettersDivs = letters.split('').map(el => (
        <Tile letter={el} onBoard played={actualMove} />
    ))

    const { x, y, verticle } = setPosition();

    return (
        <StyledWrapper x={x} y={y} verticle={verticle}>
            {lettersDivs}
        </StyledWrapper>
    );
}

export default WithContext(Word);