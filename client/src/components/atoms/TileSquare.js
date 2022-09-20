import styled, { css } from 'styled-components';

const TileSquare = styled.div`
  background-color: #f8e8c7;
  display: inline-block;
  box-sizing: border-box;
  color: #015b52;
  font-size: 40px;
  height: 65px;
  min-width: 65px;
  max-width: 65px;
  line-height: 65px;
  border-radius: 10%;
  text-align: center;
  cursor: pointer;
  user-select: none;
  font-family: Arial;
  font-weight: bold;
  position: relative;
  margin: 6px;

  ${({ played }) =>
    played &&
    css`
      background-color: #1ae825;
    `}
  ${({ blank }) =>
    blank &&
    css`
      color: #015b5266;
    `}
    ${({ transparent }) =>
    transparent &&
    css`
      opacity: 0;
    `}
`;

export default TileSquare;
