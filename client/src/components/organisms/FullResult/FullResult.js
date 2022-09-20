import React from 'react';
import styled from 'styled-components';
import { Table } from 'semantic-ui-react';

import Header from './Header';
import Rows from './Rows';

const StyledWrapper = styled.div`
  position: absolute;
  width: 500px;
  top: 40px;
  left: 10px;
  z-index: 2;
`;

const FullResult = () => {
  return (
    <StyledWrapper data-testid="full-result">
      <Table celled structured unstackable>
        <Header />
        <Table.Body>
          <Rows />
        </Table.Body>
      </Table>
    </StyledWrapper>
  );
};

export default FullResult;
