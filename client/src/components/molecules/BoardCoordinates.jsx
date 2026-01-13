import React from 'react';
import styled from 'styled-components';

const UpCoordinates = styled.div`
  position: absolute;
  color: white;
  line-height: 30px;
  left: 40px;
  height: 30px;
  width: calc(100% - 80px);
  font-size: 11px;
  display: flex;
`;

const LeftCoordinates = styled.div`
  position: absolute;
  color: white;
  top: 30px;
  left: 10px;
  height: calc(100% - 80px);
  width: 30px;
  font-size: 11px;
  display: flex;
  flex-direction: column;
`;

const CoordinateX = styled.div`
  width: calc(100% / 15);
  text-align: center;
`;

const CoordinateY = styled.div`
  height: calc(100% / 15);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BoardCoordinates = () => {
  return (
    <>
      <UpCoordinates>
        {'ABCDEFGHIJKLMNO'.split('').map((el) => (
          <CoordinateX key={el}>{el}</CoordinateX>
        ))}
      </UpCoordinates>
      <LeftCoordinates>
        {[...Array(15).keys()].map((el) => (
          <CoordinateY key={el}>{el + 1}</CoordinateY>
        ))}
      </LeftCoordinates>
    </>
  );
};

export default BoardCoordinates;
