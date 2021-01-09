import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import ModalWithDiagramId from "../ModalWithDiagramId";

const renderModalWithDiagramId = () => {
  const state = {
    modalIsOpen: true,
  };
  const utils = render(
    <ModalWithDiagramId
      id={476}
      closeCallback={() => (state.modalIsOpen = false)}
    />
  );
  return { ...utils, state };
};

describe("ModalWithDiagramId", () => {
  it("renders with correct text", () => {
    const { getByText } = renderModalWithDiagramId();
    expect(
      getByText(
        "Twoje zadanie jest dostępne pod adresem localhost:3000/zadania/476"
      )
    ).toBeInTheDocument();
  });

  it("handle closeCallback after click cancel button", () => {
    const { getByText, state } = renderModalWithDiagramId();
    fireEvent.click(getByText("anuluj"));
    expect(state.modalIsOpen).toEqual(false);
  });

  it("handle closeCallback after click accept button", () => {
    const { getByText, state } = renderModalWithDiagramId();
    fireEvent.click(getByText("akceptuj"));
    expect(state.modalIsOpen).toEqual(false);
  });
});
