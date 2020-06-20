import styled, { css } from 'styled-components';

const TileSquare = styled.div`
    background-color: #f8e8c7;
    display: inline-block;
    box-sizing: border-box;
    color: #015b52;
    font-size: 50px;
    height: 65px;
    width: 65px;
    border-radius: 10%;
    text-align: center;
    cursor: pointer;
    user-select: none;
    font-family: GothicA1;
    font-weight: bold;
    position: relative;

    ${({ played }) => played && css`
        background-color: #8b8b8b;
    `
    }
    ${({ blank }) => blank && css`
        color: #015b5266;
    `
    }

    ${({ onBoard }) => onBoard && css`
        font-size: 23px;
        width: 36px;
        height: 36px;
        margin: 1px 1px 0 1px;
        line-height: 38px;
    `
    }
`

export default TileSquare;
