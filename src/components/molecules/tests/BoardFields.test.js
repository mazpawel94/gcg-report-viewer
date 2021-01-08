import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import BoardFields from "../BoardFields";

const renderBoardFields = () => {
  return render(<BoardFields />);
};

describe("BoardFields", () => {
  it("renders succesfull", () => {
    const { container } = renderBoardFields();
    expect(container).not.toBeEmptyDOMElement();
  });
});
