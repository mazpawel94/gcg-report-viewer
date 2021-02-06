import React from "react";
import "@testing-library/jest-dom";
import { cleanup, waitFor } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";

import { contextValues } from "../../dummyContextValues";
import Context from "../../context";
import useFillDeletion from "../useFillDeletion";

afterEach(cleanup);

const renderFDHook = () => {
  const utils = renderHook(() => useFillDeletion(), {
    wrapper: (props) => (
      <Context.Provider value={contextValues}>
        {props.children}
      </Context.Provider>
    ),
  });
  return { ...utils.result.current };
};

describe("useFillDeletion", () => {
  it("returns used letters", async () => {
    contextValues.actualMoveIndex = 1;
    const { usedLetters } = renderFDHook();
    await waitFor(() => expect(usedLetters).toEqual("RĘCZONA".split("")));
  });
});
