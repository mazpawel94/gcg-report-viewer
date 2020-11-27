import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Divider, Grid, Segment, Item, ItemExtra } from 'semantic-ui-react'

import context from '../../context';
import Deletion from '../molecules/Deletion';
const Header = styled(Item.Header)`
    width: 200px;
`;

const Points = styled.div`
    font-size: 17px;
    font-weight: bold;
`;
const NewPoints = styled.div`
    color: #e84717;
    font-size: 11px;
`;

const PlayerResult = ({ order }) => {

    const { moves, actualMoveIndex, actualOptionIndex } = useContext(context);
    const [playerPoints, setPlayerPoints] = useState(0);
    const nick = moves[order].nick.replace('_', ' ');

    useEffect(() => {
        if (order === actualMoveIndex % 2) setPlayerPoints(moves[actualMoveIndex].pointsBefore);
        else setPlayerPoints(moves[actualMoveIndex + 1]?.pointsBefore);
    }, [actualMoveIndex]);


    return (
        <Grid.Column>
            <Item>
                <Item.Content>
                    <Header as='h3'>{nick}</Header>
                    <Points>{playerPoints}</Points>
                    {order === actualMoveIndex % 2 ?
                        <NewPoints>+{moves[actualMoveIndex]?.choiceOptions[actualOptionIndex]?.movePoints}</NewPoints>
                        :
                        <NewPoints />
                    }
                </Item.Content>
            </Item>
        </Grid.Column>
    )
}

const Result = () => {
    return (
        <>
            <Segment compact >
                <Grid columns={2} relaxed='very' stackable textAlign='center' >
                    <PlayerResult order={0} />
                    <PlayerResult order={1} />
                </Grid>

                <Divider vertical>Vs</Divider>
            </Segment>
            <Deletion />
        </>
    );
};


Result.propTypes = {

};


export default Result;
