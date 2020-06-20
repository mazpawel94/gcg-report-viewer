import styled, { css } from 'styled-components';

const TilePoints = styled.sub`
    font-size: 15px;
    position: absolute;

    ${({ onBoard }) => onBoard && css`
        position: absolute;
        font-size: 9px;
        right: 2px;
        bottom: -13px;
    `}
`

export default TilePoints;