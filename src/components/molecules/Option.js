import React from 'react';
import styled from 'styled-components';
import OptionParam from '../atoms/OptionParam';

const StyledWrapper = styled.div`
  min-width: 500px;
  max-width: 500px;
  display: flex;
  background-color: ${({ selected }) => selected ? 'green' : '#D5FADC'};
  text-align: center;
  padding: 6px;
  :nth-child(2n) {
    background-color: ${({ selected }) => selected ? 'green' : 'transparent'};
    }
`;

const Option = ({ params, selected }) => {
    const { evaluate, coordinates, word, movePoints, percent, freeLetters } = params;
    return (
        <StyledWrapper selected={selected}>
            <OptionParam width={10}>{evaluate}</OptionParam>
            <OptionParam width={5}>{coordinates}</OptionParam>
            <OptionParam width={40}>{word}</OptionParam>
            <OptionParam width={5}>{movePoints}</OptionParam>
            <OptionParam width={10}>{percent}</OptionParam>
            <OptionParam width={30}>{freeLetters}</OptionParam>
        </StyledWrapper>
    );
}

export default Option;
