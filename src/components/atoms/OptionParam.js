import styled from 'styled-components';

const OptionParam = styled.div`
    text-align: center;
    font-family: 'lato';
    font-size: 15px;
    width: ${({ width }) => `${width || 10}%`};
`;

export default OptionParam;