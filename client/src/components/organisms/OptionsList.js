import React from 'react';
import styled from 'styled-components';
import { Table } from 'semantic-ui-react';

import AppContext, { useAppContext } from '../../context';
import { actionTypes } from '../../reducers/gameReducer';
import useGetFromCurrentState from '../../hooks/useGetFromCurrentState';
const StyledWrapper = styled.div`
  flex-grow: 1;
  width: 80%;

  .ui.basic.striped.table tbody .active {
    background-color: #d5faddad !important;
  }
`;

const StyledRow = styled(Table.Row)`
  cursor: pointer;
`;

const Option = ({ params, selected, index }) => {
  const { dispatch } = useAppContext();
  const { evaluate, coordinates, word, movePoints, percent, freeLetters } = params;
  return (
    <StyledRow active={selected} onClick={() => dispatch({ type: actionTypes.setOptionIndex, payload: index })}>
      <Table.Cell>{evaluate}</Table.Cell>
      <Table.Cell>{coordinates}</Table.Cell>
      <Table.Cell>{word}</Table.Cell>
      <Table.Cell>{movePoints}</Table.Cell>
      <Table.Cell>{percent}</Table.Cell>
      <Table.Cell>{freeLetters}</Table.Cell>
    </StyledRow>
  );
};
const OptionsList = () => {
  const { actualOptionIndex } = useAppContext();
  const { actualMove } = useGetFromCurrentState();
  const optionsElements = actualMove.choiceOptions.map((el, i) => (
    <Option key={i} index={i} params={el} selected={i === actualOptionIndex} />
  ));
  return (
    <StyledWrapper>
      <Table basic="very" striped unstackable>
        <Table.Header>
          <Table.Row></Table.Row>
        </Table.Header>
        <Table.Body>{optionsElements}</Table.Body>
      </Table>
    </StyledWrapper>
  );
};

export default OptionsList;
