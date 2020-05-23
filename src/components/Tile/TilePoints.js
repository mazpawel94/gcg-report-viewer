import styled, { css } from 'styled-components';

const TilePoints = styled.sub`
    font-size: 15px;

    ${({ small }) => small && css`
        font-size: 5px;
    `}
`

export default TilePoints;