import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Divider, Grid, Segment, Item } from 'semantic-ui-react'

import context from '../../context';

const ItemHeader = styled(Item.Header)`
    width: 200px;
`;

const Result = () => {
    const [players, setPlayers] = useState([]);
    const { moves, actualMoveIndex, actualOptionIndex } = useContext(context);

    useEffect(() => {
        setPlayers([moves[0].nick.replace('_', ' '), moves[1].nick.replace('_', ' ')])
    }, []);

    return (
        <Segment compact >
            <Grid columns={2} relaxed='very' stackable textAlign='center' >
                <Grid.Column>
                    <Item>
                        <Item.Content>
                            <ItemHeader as='h3'>{players[0]}</ItemHeader>
                            <Item.Meta>10</Item.Meta>
                            <Item.Extra>+25</Item.Extra>
                        </Item.Content>
                    </Item>
                </Grid.Column>

                <Grid.Column>
                    <Item>
                        <Item.Content>
                            <ItemHeader as='h3'>{players[1]}</ItemHeader>
                            <Item.Meta>10</Item.Meta>
                            <Item.Extra>+25</Item.Extra>
                        </Item.Content>
                    </Item>
                </Grid.Column>
            </Grid>

            <Divider vertical>Vs</Divider>
        </Segment>
    );
};


Result.propTypes = {

};


export default Result;
