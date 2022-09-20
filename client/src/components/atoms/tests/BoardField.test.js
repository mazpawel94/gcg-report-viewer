import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import BoardField from '../BoardField';

const renderBoardField = (type = null) => {
  return render(<BoardField x={1} y={1} type={type} />);
};

describe('BoardField', () => {
  it('renders main field if type is empty', () => {
    const { getByTestId } = renderBoardField();
    expect(getByTestId('board-field')).toBeEmptyDOMElement();
  });

  it('renders star if type is middle', () => {
    const { getByTestId } = renderBoardField('middle');
    expect(getByTestId('star')).toBeInTheDocument();
  });

  it('renders field with type with correct styles', () => {
    const { getByTestId } = renderBoardField('word2');
    expect(getByTestId('rotated-rect')).toHaveAttribute('fill', '#e8b442');
  });
});
