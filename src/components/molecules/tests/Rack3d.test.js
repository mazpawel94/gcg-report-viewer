import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Rack3d from "../Rack3d";

const renderRack3d = (top = false) => {
  return render(<Rack3d top={top} />);
};

describe("Rack3d", () => {
  it("set class 'top' if refer prop", () => {
    const { container } = renderRack3d(true);
    expect(container.firstChild).toHaveClass("top");
  });

  it("doesn't set class 'top' without refer prop", () => {
    const { container } = renderRack3d();
    expect(container.firstChild).toHaveClass("tridiv");
    expect(container.firstChild).not.toHaveClass("top");
  });
});
