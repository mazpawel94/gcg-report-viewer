import React, { useContext } from 'react';

import styled from 'styled-components';

import Board from '../organisms/Board';
import FileInput from '../atoms/FileInput';
import OptionsList from '../organisms/OptionsList';
import Rack from '../organisms/Rack';
import GameNavigation from '../molecules/GameNavigation';
import AppContext from '../../context';
import useHandleKeyDown from '../../hooks/useHandleKeyDown';

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
`;
const MoveContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    flex-grow: 1;
`;

const GameplayAnalysed = () => {
    const { actualMoveIndex } = useContext(AppContext);

    const { setNextMove, setPreviousMove } = useHandleKeyDown();

    return (
        <StyledWrapper>
            <StyledHeader>
                <FileInput />
            </StyledHeader>
            <BoardWrapper>
                <Board />
                <GameNavigation
                    nextMoveFn={setNextMove}
                    prevMoveFn={setPreviousMove}
                />
            </BoardWrapper>
            {actualMoveIndex !== undefined && (
                <MoveContent>
                    <OptionsList />
                    {/* <Rack /> */}
                </MoveContent>
            )}
        </StyledWrapper>
    );
}

export default GameplayAnalysed;
