import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Divider, Grid, Segment, Item, ItemExtra } from 'semantic-ui-react'

import context from '../../context';

const ItemHeader = styled(Item.Header)`
    width: 200px;
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
                    <ItemHeader as='h3'>{nick}</ItemHeader>
                    <Item.Meta>{playerPoints}</Item.Meta>
                    {order === actualMoveIndex % 2 ?
                        <Item.Extra>+{moves[actualMoveIndex].choiceOptions[actualOptionIndex].movePoints}</Item.Extra>
                        :
                        <ItemExtra />
                    }
                </Item.Content>
            </Item>
        </Grid.Column>
    )
}

const Result = () => {
    return (
        <Segment compact >
            <Grid columns={2} relaxed='very' stackable textAlign='center' >
                <PlayerResult order={0} />
                <PlayerResult order={1} />
            </Grid>

            <Divider vertical>Vs</Divider>
        </Segment>
    );
};


Result.propTypes = {

};


export default Result;
