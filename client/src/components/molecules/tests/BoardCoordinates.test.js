import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import BoardCoordinates from "../BoardCoordinates";

const renderBoardCoordinates = () => {
  return render(<BoardCoordinates />);
};

describe("BoardCoordinates", () => {
  it("renders all numerical coordinates", () => {
    const { container } = renderBoardCoordinates();
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].forEach((el) => {
      expect(container).toHaveTextContent(el);
    });
  });

  it("renders all alphabetical coordinates", () => {
    const { container } = renderBoardCoordinates();
    [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
    ].forEach((el) => {
      expect(container).toHaveTextContent(el);
    });
  });
});
