import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  /* overflow: hidden; */
`;

const Background = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  clip-path: polygon(80% 26%,100% 11%,100% 100%,0 100%,0 41%,19% 32%);
  background: rgb(129, 246, 166);
  background: linear-gradient(
    103deg,
    rgba(129, 246, 166, 1) 0%,
    rgba(78, 171, 107, 1) 36%,
    rgba(41, 150, 75, 1) 100%
  );
`;


const MainTemplate = ({ children }) => {
    return (
        <StyledWrapper>
            <Background />
            {children}
        </StyledWrapper>
    );
};

export default MainTemplate;