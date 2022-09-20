import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Board from '../Board';
import { contextValues } from '../../../dummyContextValues';
import Context from '../../../context';

const renderBoard = () => {
  const utils = render(
    <Context.Provider value={contextValues}>
      <Board />
    </Context.Provider>,
  );
  const boardWraper = utils.getByTestId('board');
  return { ...utils, boardWraper };
};

describe('Board', () => {
  it('renders without perspective if actualOption exist', () => {
    const { boardWraper } = renderBoard();
    expect(boardWraper).toHaveStyle('transform: rotateX(0)');
  });

  it('renders with perspective if actualOption not exist ', () => {
    contextValues.setMoves([]);
    const { boardWraper } = renderBoard();
    expect(boardWraper).toHaveStyle('transform: translateX(65%) perspective(1000px) rotateX(70deg) rotateZ(-45deg)');
  });

  it('renders without buttons if actualOption not exist ', () => {
    const { container } = renderBoard();
    expect(container.querySelectorAll('button').length).toEqual(0);
  });

  it('renders with buttons if actualOption exist ', () => {
    contextValues.setDefaultMoves();
    const { container } = renderBoard();
    expect(container.querySelectorAll('button').length).toEqual(5);
  });
});
