import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import FullResult from "../FullResult";
import { contextValues } from "../../../dummyContextValues";
import Context from "../../../context";

const renderFullResult = () => {
  return render(
    <Context.Provider value={contextValues}>
      <FullResult />
    </Context.Provider>
  );
};

describe("FullResult", () => {
  it("renders with correct players nicks", () => {
    const { container } = renderFullResult();
    expect(container).toHaveTextContent(
      contextValues.moves[0].nick.replace("_", " ")
    );
    expect(container).toHaveTextContent(
      contextValues.moves[1].nick.replace("_", " ")
    );
  });

  it("renders correctly when moves.length % 2", () => {
    contextValues.moves.pop();
    const { container } = renderFullResult();
    expect(container).toHaveTextContent(
      contextValues.moves[0].nick.replace("_", " ")
    );
  });

  it("changes move index in context by click on result row", () => {
    const { container } = renderFullResult();
    fireEvent.click(container.querySelectorAll("tr.center")[5].firstChild);
    expect(contextValues.actualMoveIndex).toEqual(5 * 2);
  });
});
