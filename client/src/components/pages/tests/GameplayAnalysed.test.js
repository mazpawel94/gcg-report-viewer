import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Context from "../../../context";
import { contextValues } from "../../../dummyContextValues";
import GameplayAnalysed from "../GameplayAnalysed";

const renderGameplayAnalysed = () => {
  return render(
    <Context.Provider value={contextValues}>
      <GameplayAnalysed />
    </Context.Provider>
  );
};

describe("GameplayAnalysed", () => {
  it("renders only left panel if move index is undefined", () => {
    contextValues.actualMoveIndex = undefined;
    const { queryByTestId } = renderGameplayAnalysed();
    expect(queryByTestId("move-content")).not.toBeInTheDocument();
  });
  it("renders left and right panel if move index is not undefined", () => {
    contextValues.actualMoveIndex = 0;
    const { getByTestId } = renderGameplayAnalysed();
    expect(getByTestId("move-content")).toBeInTheDocument();
  });
});
