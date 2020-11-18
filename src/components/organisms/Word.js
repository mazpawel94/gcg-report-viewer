import React from "react";
import styled, { css } from "styled-components";
import Tile from "../molecules/Tile";

import { betweenBracketsValidator } from '../../services/gameService';
const StyledWrapper = styled.div`
  position: absolute;
  top: ${({ y }) => `calc(${y} * 100% / 15)`};
  left: ${({ x }) => `calc(${x} * 100% / 15)`};
  display: flex;

  ${({ verticle }) =>
        verticle &&
        css`
      flex-direction: column;
    `}
`;

const setPosition = (coordinates) => {
    const coord = coordinates
        .split("")
        .filter((el) => el !== "*")
        .join("");
    if (coord.slice(-1) !== coord.slice(-1).toLowerCase())
        //horizontal
        return {
            x: coord.slice(-1).charCodeAt() - 65,
            y: coord.slice(0, -1) - 1,
            verticle: false,
        };
    else
        return {
            x: coord[0].charCodeAt() - 65,
            y: coord.slice(1) - 1,
            verticle: true,
        };
};

const lettersDivs = (letters, isNewMove, isBetweenBrackets) =>
    letters
        .split("")
        .map((el, index) => (
            <Tile
                key={index}
                letter={el}
                onBoard
                played={isNewMove}
                transparent={isBetweenBrackets(index)}
            />
        ));

const Word = ({ isNewMove, letters, coordinates }) => {
    const { x, y, verticle } = setPosition(coordinates);
    const isBetweenBrackets = betweenBracketsValidator(letters);

    return (
        <StyledWrapper x={x} y={y} verticle={verticle}>
            {lettersDivs(letters, isNewMove, isBetweenBrackets)}
        </StyledWrapper>
    );
};

export default Word;
