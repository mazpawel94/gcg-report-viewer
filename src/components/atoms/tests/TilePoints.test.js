import React from "react";
import { render } from "@testing-library/react";
import "jest-styled-components";
import TilePoints from "../TilePoints";

describe("TilePoints", () => {
  it("renders TilePoints with correct styles", () => {
    const { getByTestId } = render(
      <div data-testid="root">
        <TilePoints />
      </div>
    );
    expect(getByTestId("root").firstChild).toHaveStyle("font-size: 15px");
  });
});
