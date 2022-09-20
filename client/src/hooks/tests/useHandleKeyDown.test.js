import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, fireEvent, waitFor } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import { contextValues } from '../../dummyContextValues';
import Context from '../../context';
import useHandleKeyDown from '../useHandleKeyDown';

afterEach(cleanup);

const renderHKDook = () => {
  const Wrapper = (props) => <Context.Provider value={contextValues}>{props.children}</Context.Provider>;
  const utils = renderHook(() => useHandleKeyDown(), {
    wrapper: Wrapper,
  });
  return { ...utils.result.current, Wrapper };
};

describe('useHandleKeyDown', () => {
  it('returns 2 functions', () => {
    const { setPreviousMove, setNextMove } = renderHKDook();
    expect(typeof setPreviousMove).toEqual('function');
    expect(typeof setNextMove).toEqual('function');
  });

  it('changes actual move in context after call setNextMove', () => {
    const { setNextMove } = renderHKDook();
    setNextMove();
    expect(contextValues.actualMoveIndex).toEqual(1);
  });

  it('changes actual move in context after call setPreviousMove', () => {
    contextValues.actualMoveIndex = 4;
    const { setPreviousMove } = renderHKDook();
    setPreviousMove();
    expect(contextValues.actualMoveIndex).toEqual(3);
  });

  it('changes actual move in context after click left arrow', () => {
    contextValues.actualMoveIndex = 2;
    renderHKDook();
    fireEvent.keyDown(document, {
      keyCode: 37,
    });
    expect(contextValues.actualMoveIndex).toEqual(1);
  });

  it('changes actual move in context after click right arrow', () => {
    contextValues.actualMoveIndex = 2;
    renderHKDook();
    fireEvent.keyDown(document, {
      keyCode: 39,
    });
    expect(contextValues.actualMoveIndex).toEqual(3);
  });

  it('changes actual option in context after click up arrow', () => {
    contextValues.actualOptionIndex = 2;
    renderHKDook();
    fireEvent.keyDown(document, {
      keyCode: 38,
    });
    expect(contextValues.actualOptionIndex).toEqual(1);
  });

  it('changes actual option in context after click down arrow', () => {
    contextValues.actualOptionIndex = 2;
    renderHKDook();
    fireEvent.keyDown(document, {
      keyCode: 40,
    });
    expect(contextValues.actualOptionIndex).toEqual(3);
  });
});
