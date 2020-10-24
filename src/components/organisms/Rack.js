import React, { useContext } from 'react';
import styled from 'styled-components';

import Tile from '../molecules/Tile';
import AppContext from '../../context';

const StyledWrapper = styled.div`
display: flex;
justify-content: space-between;
width: 500px;
`;

const Rack = () => {
    const { moves, actualMoveIndex, actualOptionIndex } = useContext(AppContext);
    const move = moves[actualMoveIndex];
    if (!move.choiceOptions[actualOptionIndex]) return null;
    const freeLetters = move.choiceOptions[actualOptionIndex].freeLetters.split('');

    const checkAndRemoveLetter = el => {
        const index = freeLetters.indexOf(el);
        if (index !== -1) {
            freeLetters.splice(index, 1);
            return false;
        }
        return true
    }

    const tiles = move.letters.split('').map((el, i) => (
        <Tile
            key={i}
            letter={el}
            played={checkAndRemoveLetter(el)}
        />
    ))

    return (
        <StyledWrapper>
            {tiles}
        </StyledWrapper>
    );
}

export default Rack;
