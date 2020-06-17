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
    /* z-index: 1; */
    margin-left: 10px;
    font-family: Arial;
    font-weight: bold;

    ${({ played }) => played && css`
        background-color: #8b8b8b;
    `
    }

    ${({ onBoard }) => onBoard && css`
            font-size: 30px;
            width: 37px;
            height: 37px;
            margin-left: 0;
            margin-right: 1px;
    `
    }
`

export default TileSquare;
