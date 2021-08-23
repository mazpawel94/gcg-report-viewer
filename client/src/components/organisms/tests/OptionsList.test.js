import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import OptionsList from "../OptionsList";
import { contextValues } from "../../../dummyContextValues";
import Context from "../../../context";

const renderOptionsList = () => {
  return render(
    <Context.Provider value={contextValues}>
      <OptionsList />
    </Context.Provider>
  );
};

describe("OptionsList", () => {
  it("renders with correct text", () => {
    const { container } = renderOptionsList();
    expect(container).toHaveTextContent("RĘCZONA");
  });
 
  it("changes option index in context after click on option row", () => {
    const { getByText } = renderOptionsList();
    fireEvent.click(getByText("74"));
    expect(contextValues.actualOptionIndex).toEqual(4);
  });
});
