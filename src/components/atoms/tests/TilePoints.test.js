import React from "react";
import { render } from "@testing-library/react";
import "jest-styled-components";
import TilePoints from "../TilePoints";

describe("TilePoints", () => {
  it("renders TilePoints with correct styles", () => {
    const { container } = render(<TilePoints />);
    expect(container.firstChild).toHaveStyle("font-size: 15px");
  });
});
