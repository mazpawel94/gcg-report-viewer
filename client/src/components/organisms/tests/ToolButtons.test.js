import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import ToolButtons from '../ToolButtons';
import { contextValues } from '../../../dummyContextValues';
import Context from '../../../context';

const renderToolButtons = () => {
  const state = {
    imageWillBeBefore: undefined,
  };
  const utils = render(
    <Context.Provider value={contextValues}>
      <ToolButtons saveImageBefore={(res) => (state.imageWillBeBefore = res)} />
    </Context.Provider>,
  );
  const buttons = utils.getByTestId('buttons-wrapper').querySelectorAll('button');

  return { ...utils, buttons, state };
};

describe('ToolButtons', () => {
  it('renders with correct styles', () => {
    const { getByTestId } = renderToolButtons();
    expect(getByTestId('buttons-wrapper')).toHaveStyle('width: 660px');
  });

  it('renders deletion after click button', () => {
    const { getByTestId, buttons } = renderToolButtons();
    fireEvent.click(buttons[0]);
    expect(getByTestId('deletion')).toBeInTheDocument();
  });

  it('renders full result after click button', () => {
    const { getByTestId, buttons } = renderToolButtons();
    fireEvent.click(buttons[1]);
    expect(getByTestId('full-result')).toBeInTheDocument();
  });

  it("calls callback with true after click button 'Zapisz obraz (przed) ", () => {
    const { state, buttons } = renderToolButtons();
    fireEvent.click(buttons[2]);
    expect(state.imageWillBeBefore).toEqual(true);
  });

  it("opens modal with new diagram details after click button 'Dodaj jako zadanie'", async () => {
    const { getByText, buttons } = renderToolButtons();
    fireEvent.click(buttons[4]);
    await waitFor(() => expect(getByText('Pomyślnie dodano')).toBeInTheDocument());
  });

  it("close modal after click button 'anuluj'", async () => {
    const { queryByText, buttons } = renderToolButtons();
    fireEvent.click(buttons[4]);
    await waitFor(() => fireEvent.click(queryByText('anuluj')));
    expect(queryByText('anuluj')).not.toBeInTheDocument();
  });
});
