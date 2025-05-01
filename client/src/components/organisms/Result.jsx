import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Divider, Grid, Item, Segment } from 'semantic-ui-react';

import { useAppContext } from '../../context';
import { useGameEntryActionsContext, useGameEntryContext } from '../../contexts/GameEntryContext';

const Header = styled(Item.Header)`
  width: 200px;
`;

const HeaderInput = styled.input`
  height: 30px;
  margin-bottom: 10px;
  padding: 0 15px;
`;
const Points = styled.div`
  font-size: 17px;
  font-weight: bold;
`;
const NewPoints = styled.div`
  color: #e84717;
  font-size: 11px;
`;

const PlayerResult = ({ nick, points, newPoints = null, handleSetNick = null }) => (
  <Grid.Column>
    <Item>
      <Item.Content>
        {handleSetNick ? <HeaderInput onInput={handleSetNick} value={nick} /> : <Header as="h3">{nick}</Header>}
        <Points>{points}</Points>
        {newPoints ? <NewPoints>+{newPoints}</NewPoints> : null}
      </Item.Content>
    </Item>
  </Grid.Column>
);

const PlayerResultForAnalyse = ({ order }) => {
  const { moves, actualMoveIndex, actualOptionIndex } = useAppContext();
  const [playerPoints, setPlayerPoints] = useState(0);
  const nick = moves[order].nick.replace('_', ' ');

  useEffect(() => {
    if (order === actualMoveIndex % 2) setPlayerPoints(moves[actualMoveIndex].pointsBefore);
    else setPlayerPoints(moves[actualMoveIndex + 1]?.pointsBefore);
  }, [actualMoveIndex, moves, order]);

  return (
    <PlayerResult
      nick={nick}
      points={playerPoints}
      newPoints={
        order === actualMoveIndex % 2 ? moves[actualMoveIndex]?.choiceOptions[actualOptionIndex]?.movePoints : null
      }
    />
  );
};

const Result = () => {
  return (
    <>
      <Segment compact>
        <Grid columns={2} relaxed="very" stackable textAlign="center">
          <PlayerResultForAnalyse order={0} />
          <PlayerResultForAnalyse order={1} />
        </Grid>
        <Divider vertical>Vs</Divider>
      </Segment>
    </>
  );
};

export const ResultForGameEntry = () => {
  const { setPlayersName } = useGameEntryActionsContext();
  const { playersName, approvedMoves } = useGameEntryContext();

  const actualPoints = useMemo(() => {
    if (!approvedMoves.length) return [0, 0];
    if (approvedMoves.length === 1) return [approvedMoves[0].sumPoints, 0];
    const lastMoves = [approvedMoves[approvedMoves.length - 2], approvedMoves[approvedMoves.length - 1]];
    return [
      (lastMoves[0].index % 2 ? lastMoves[1] : lastMoves[0]).sumPoints,
      (lastMoves[0].index % 2 ? lastMoves[0] : lastMoves[1]).sumPoints,
    ];
  }, [approvedMoves]);

  const handleSetName = (index, name) => setPlayersName((prev) => prev.map((el, i) => (i === index ? name : el)));

  return (
    <>
      <Segment compact>
        <Grid columns={2} relaxed="very" stackable textAlign="center">
          <PlayerResult
            nick={playersName[0]}
            points={actualPoints[0]}
            handleSetNick={({ target }) => handleSetName(0, target.value)}
          />
          <PlayerResult
            nick={playersName[1]}
            points={actualPoints[1]}
            handleSetNick={({ target }) => handleSetName(1, target.value)}
          />
        </Grid>
        <Divider vertical>Vs</Divider>
      </Segment>
    </>
  );
};

export default Result;
