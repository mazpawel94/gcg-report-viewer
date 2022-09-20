import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import BoardTile from '../BoardTile';

const renderBoardTile = (transparent = false, newMove = false, letter = 'A') => {
  return render(<BoardTile x={1} y={1} letter={letter} transparent={transparent} newMove={newMove} />);
};

describe('BoardTile', () => {
  it('renders main tile with correct styles', () => {
    const { getByTestId } = renderBoardTile();
    expect(getByTestId('tile')).toHaveAttribute('fill', '#f8e8c7');
  });

  it('change tile color if newMove', () => {
    const { getByTestId } = renderBoardTile(false, true);
    expect(getByTestId('tile')).toHaveAttribute('fill', '#1ae825');
  });

  it("renders as transparent element if 'transparent' is true", () => {
    const { getByTestId } = renderBoardTile(true);
    expect(getByTestId('tile')).toHaveAttribute('opacity', '0');
  });

  it("renders as blank if 'letter' is lower case", () => {
    const { getByTestId } = renderBoardTile(false, false, 'a');
    expect(getByTestId('letter')).toHaveAttribute('opacity', '0.3');
  });

  it('renders correct points value', () => {
    const { getByTestId } = renderBoardTile();
    expect(getByTestId('points')).toHaveAttribute('text', '1');
  });
});
