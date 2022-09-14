import styled, { css } from "styled-components";
import { Button } from "semantic-ui-react";

const StyledButton = styled(Button)`
  background: #f9e254 !important;
  color: #03252b !important;
  padding: 12px !important;
  &:hover {
    background-color: #779827 !important;
    color: #f9e254 !important;
  }
  ${({ clicked }) =>
    clicked &&
    css`
      background-color: #779827 !important;
      color: #f9e254 !important;
    `}
`;

export default StyledButton;
