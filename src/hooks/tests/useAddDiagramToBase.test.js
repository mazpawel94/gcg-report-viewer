import React from "react";
import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";

import { contextValues } from "../../dummyContextValues";
import Context from "../../context";
import useAddDiagramToBase from "../useAddDiagramToBase";

afterEach(cleanup);

const renderADTBHook = () => {
  const utils = renderHook(() => useAddDiagramToBase(), {
    wrapper: (props) => (
      <Context.Provider value={contextValues}>
        {props.children}
      </Context.Provider>
    ),
  });
  return { ...utils.result.current };
};

describe("useAddDiagramToBase", () => {
  it("return promise with new diagram id", async () => {
    const { addDiagramCallback } = renderADTBHook();
    const { id } = await addDiagramCallback();
    expect(id).toEqual("476");
  });
});
