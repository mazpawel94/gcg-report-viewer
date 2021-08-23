import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import GameNavigation from "../GameNavigation";
import Context from "../../../context";
import { contextValues } from "../../../dummyContextValues";

const renderGameNavigation = () => {
  const utils = render(
    <Context.Provider value={contextValues}>
      <GameNavigation />
    </Context.Provider>
  );
  const buttons = utils
    .getByTestId("game-navigation")
    .querySelectorAll("button");
  return { ...utils, buttons };
};

describe("GameNavigation", () => {
  it("renders with 4 buttons", () => {
    const { buttons } = renderGameNavigation();
    expect(buttons.length).toEqual(4);
  });

  it("change move index to 0 in context by click 'fast backward' button", () => {
    const { buttons } = renderGameNavigation();
    fireEvent.click(buttons[0]);
    expect(contextValues.actualMoveIndex).toEqual(0);
  });

  it("change move index to 1 in context after first click 'forward' button", () => {
    const { buttons } = renderGameNavigation();
    fireEvent.click(buttons[2]);
    expect(contextValues.actualMoveIndex).toEqual(1);
  });

  it("change move index to 0 in context and stop decrease after clicks 'backward' button", () => {
    const { buttons } = renderGameNavigation();
    fireEvent.click(buttons[1]);
    fireEvent.click(buttons[1]);
    fireEvent.click(buttons[1]);
    fireEvent.click(buttons[1]);
    expect(contextValues.actualMoveIndex).toEqual(0);
  });

  it("change move index to moves.length - 2 in context by click 'fast forward' button", () => {
    const { buttons } = renderGameNavigation();
    fireEvent.click(buttons[3]);
    expect(contextValues.actualMoveIndex).toEqual(
      contextValues.moves.length - 2
    );
  });

  it("stop increase move index in context after clicks 'forward' button if  moveIndex === moves.length - 1", () => {
    const { buttons } = renderGameNavigation();
    fireEvent.click(buttons[3]);
    fireEvent.click(buttons[2]);
    fireEvent.click(buttons[2]);
    fireEvent.click(buttons[2]);
    expect(contextValues.actualMoveIndex).toEqual(
      contextValues.moves.length - 1
    );
  });
});
