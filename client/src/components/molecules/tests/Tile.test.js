import React from 'react';
import { render, prettyDOM } from '@testing-library/react';
import '@testing-library/jest-dom';

import Tile from '../Tile';

const renderTile = ({ letter = 'C', played = true, onBoard = true, transparent = false }) => {
  return render(<Tile letter={letter} played={played} onBoard={onBoard} transparent={transparent} />);
};

describe('Tile', () => {
  it('returns null if letter is bracket', () => {
    const { container } = renderTile({ letter: '(' });
    expect(container).toBeEmptyDOMElement();
  });

  it('blank is true if pass small letter in props', () => {
    const { container } = renderTile({ letter: 'a' });
    expect(container.firstChild).toHaveStyle('color: #015b5266');
  });

  it('passing correct props to TileSquare', () => {
    const { container } = renderTile({ transparent: true });
    expect(container.firstChild).toHaveStyle('opacity: 0');
  });

  it('renders correct points value', () => {
    const { container } = renderTile({ letter: 'Ź' });
    expect(container).toHaveTextContent('9');
  });
});
