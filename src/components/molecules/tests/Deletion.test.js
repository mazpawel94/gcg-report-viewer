import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import "jest-styled-components";

import Deletion from "../Deletion";
import Context from "../../../context";
import { contextValues } from "../../../dummyContextValues";

const renderDeletion = () => {
  const utils = render(
    <Context.Provider value={contextValues}>
      <Deletion />
    </Context.Provider>
  );
  const deletion = utils.getByTestId("deletion");
  return { ...utils, deletion };
};

describe("Deletion", () => {
  it("renders succesfull", () => {
    const { deletion } = renderDeletion();
    expect(deletion).toBeInTheDocument();
  });

  it("renders DeletionLetter with opacity if is onBoard", () => {
    const { deletion } = renderDeletion();
    expect(deletion.firstChild).toHaveStyle("opacity: 0.4");
  });

  it("renders DeletionLetter without opacity if is not onBoard", () => {
    const { deletion } = renderDeletion();
    expect(deletion.children[2]).toHaveStyle("opacity: 1");
  });
});
