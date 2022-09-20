import styled, { css } from 'styled-components';

const TilePoints = styled.sub`
  font-size: 15px;
  position: absolute;
  bottom: 12px;
  right: 8px;

  ${({ small }) =>
    small &&
    css`
      font-size: 8px;
      bottom: 5px;
      right: 4px;
    `}
`;

export default TilePoints;
