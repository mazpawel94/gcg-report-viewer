import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Result from '../Result';
import { contextValues } from '../../../dummyContextValues';
import Context from '../../../context';

const renderResult = () => {
  return render(
    <Context.Provider value={contextValues}>
      <Result />
    </Context.Provider>,
  );
};

describe('Result', () => {
  it('renders with correct players nicks', () => {
    const { container } = renderResult();
    expect(container).toHaveTextContent(contextValues.moves[0].nick.replace('_', ' '));
    expect(container).toHaveTextContent(contextValues.moves[1].nick.replace('_', ' '));
  });
});
