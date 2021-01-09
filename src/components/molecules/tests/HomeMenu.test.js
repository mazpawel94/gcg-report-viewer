import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import HomeMenu from "../HomeMenu";
import Context from "../../../context";
import { contextValues, txtFile } from "./dummyContextValues";

const renderHomeMenu = () => {
  const history = createMemoryHistory();
  const utils = render(
    <Router history={history}>
      <Context.Provider value={contextValues}>
        <HomeMenu />
      </Context.Provider>
    </Router>
  );
  const root = utils.getByTestId("home-menu");
  const hiddenInput = root.querySelector("input");
  return { ...utils, root, hiddenInput, history };
};

describe("HomeMenu", () => {
  it("renders with correct styles", () => {
    const { root } = renderHomeMenu();
    expect(root).toHaveStyle("line-height: 200px");
  });

  it("redirect to /zadania after click second option", () => {
    const { getByText, history } = renderHomeMenu();
    fireEvent.click(getByText("Rozwiązuj zadania"));
    expect(history.location.pathname).toBe("/zadania");
  });

  it("change link style after click", () => {
    const { getByText } = renderHomeMenu();
    fireEvent.click(getByText("Analizuj partię"));
    expect(getByText("Analizuj partię")).toHaveStyle("color: #3c4a3e");
  });

  it("change state after fill HiddenInput", async () => {
    contextValues.actualMoveIndex = 5;
    const { hiddenInput } = renderHomeMenu();
    expect(contextValues.actualMoveIndex).toEqual(5);
    fireEvent.input(hiddenInput, {
      target: {
        files: [
          new Blob([txtFile], {
            type: "text/plain",
          }),
        ],
      },
    });
    await waitFor(() => expect(contextValues.actualMoveIndex).toEqual(0));
  });

  it("redirect to /analiza after fill HiddenInput", async () => {
    const { hiddenInput, history } = renderHomeMenu();
    fireEvent.input(hiddenInput, {
      target: {
        files: [
          new Blob([txtFile], {
            type: "text/plain",
          }),
        ],
      },
    });
    await waitFor(() => expect(history.location.pathname).toBe("/analiza"));
  });
});
