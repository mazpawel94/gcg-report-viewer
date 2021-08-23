import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Word from "../Word";
import { contextValues } from "../../../dummyContextValues";
import Context from "../../../context";

const renderWord = (letters, coord) => {
  return render(
    <Context.Provider value={contextValues}>
      <Word letters={letters} coordinates={coord} isNewMove={false} />
    </Context.Provider>
  );
};

describe("Word", () => {
  it("renders correct tiles", () => {
    const { queryAllByTestId } = renderWord("PO(L)ANIE", "A12");
    const tiles = queryAllByTestId("tile");
    expect(tiles.length).toEqual(7);
  });

  it("renders correct tiles -second branch", () => {
    const { queryAllByTestId } = renderWord("ŹGAJŻE", "12A");
    expect(queryAllByTestId("tile").length).toEqual(6);
  });
});
