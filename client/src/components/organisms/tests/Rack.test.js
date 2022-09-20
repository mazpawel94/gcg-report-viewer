import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Rack from '../Rack';
import { contextValues } from '../../../dummyContextValues';
import Context from '../../../context';

const renderRack = () => {
  contextValues.actualMoveIndex = 1;
  return render(
    <Context.Provider value={contextValues}>
      <Rack />
    </Context.Provider>,
  );
};

describe('Rack', () => {
  it('renders with correct styles', () => {
    const { getByTestId } = renderRack();
    expect(getByTestId('rack')).toHaveStyle('width: 500px');
  });

  it('return null if  choiceOptions not exist', () => {
    contextValues.moves[1].choiceOptions[contextValues.actualOptionIndex] = '';
    const { container } = renderRack();
    expect(container).toBeEmptyDOMElement();
  });
});
