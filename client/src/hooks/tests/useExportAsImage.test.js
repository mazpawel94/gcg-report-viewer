import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, waitFor, render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import useExportAsImage from '../useExportAsImage';

afterEach(cleanup);

const stageRef = {
  current: document.createElement('canvas'),
};

const renderEAIHook = (toDownload = true) => {
  const state = {
    callbackValue: undefined,
  };
  const callback = (res) => (state.callbackValue = res);
  const utils = renderHook(() => useExportAsImage(toDownload, stageRef, callback));
  return {
    ...utils.result.current,
    state,
  };
};

describe('useExportAsImage', () => {
  it('does not call if toDownload is false', () => {
    const { state } = renderEAIHook(false);
    expect(state.callbackValue).toEqual(undefined);
  });
  it('calls callback with false value', () => {
    const { state } = renderEAIHook();
    expect(state.callbackValue).toEqual(false);
  });
});
