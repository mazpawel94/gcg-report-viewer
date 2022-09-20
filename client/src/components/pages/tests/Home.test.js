import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Context from '../../../context';
import { contextValues } from '../../../dummyContextValues';
import Home from '../Home';

const renderHome = () => {
  return render(
    <Context.Provider value={contextValues}>
      <Home />
    </Context.Provider>,
  );
};

describe('Home', () => {
  it('renders with correct components', () => {
    const { getByTestId } = renderHome();
    expect(getByTestId('home-menu')).toBeInTheDocument();
    expect(getByTestId('board')).toBeInTheDocument();
  });
});
