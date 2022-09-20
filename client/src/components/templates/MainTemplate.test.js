import React from 'react';
import { render } from '@testing-library/react';

import MainTemplate from './MainTemplate';

describe('MainTemplate', () => {
  it('renders MainTemplate', () => {
    const { getByTestId } = render(<MainTemplate />);
    expect(getByTestId('main-template')).toBeInTheDocument();
  });
  it('renders correct background shape', () => {
    const { getByTestId } = render(<MainTemplate />);
    const backgroundShape = getByTestId('main-template-background');
    expect(backgroundShape).toHaveStyle('clip-path: polygon(81% 23%,100% 10%,100% 100%,0 100%,0 37%,18% 30%)');
  });
});
