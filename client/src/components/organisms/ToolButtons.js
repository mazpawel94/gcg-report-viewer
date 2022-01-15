import React, { useCallback, useState } from "react";
import styled, { css } from "styled-components";
import { Button } from "semantic-ui-react";

import Deletion from "../molecules/Deletion";
import FullResult from "../organisms/FullResult";
import useExportAsImage from "../../hooks/useExportAsImage";
import ModalWithDiagramId from "../molecules/ModalWithDiagramId";
import NewDiagramForm from "./NewDiagramForm";
const StyledWrapper = styled.div`
  display: flex;
  width: 660px;
  justify-content: space-between;
`;

const StyledButton = styled(Button)`
  background: #f9e254 !important;
  color: #03252b !important;
  padding: 12px !important;
  &:hover {
    background-color: #779827 !important;
    color: #f9e254 !important;
  }
  ${({ clicked }) =>
    clicked &&
    css`
      background-color: #779827 !important;
      color: #f9e254 !important;
    `}
`;

const ToolButtons = ({ stageRef }) => {
  const [fullResultIsVisible, setFullResultIsVisible] = useState(false);
  const [deletionIsVisible, setDeletionIsVisible] = useState(false);
  const [formIsVisible, setFormIsVisible] = useState(false);

  const [getImage] = useExportAsImage();

  const toggleDeletion = () => setDeletionIsVisible((prev) => !prev);
  const toggleFullResult = () => setFullResultIsVisible((prev) => !prev);
  const toggleForm = () => setFormIsVisible((prev) => !prev);
  const closeForm = useCallback(() => setFormIsVisible(false), []);

  const getImageBefore = () => getImage(stageRef, true);
  const getImageAfter = () => getImage(stageRef, false);

  return (
    <StyledWrapper data-testid="buttons-wrapper">
      <StyledButton onClick={toggleDeletion} clicked={deletionIsVisible}>
        Wykreślanka
      </StyledButton>
      <StyledButton onClick={toggleFullResult} clicked={fullResultIsVisible}>
        Pełny zapis
      </StyledButton>
      <StyledButton onClick={getImageBefore}>Zapisz obraz (przed)</StyledButton>
      <StyledButton onClick={getImageAfter}>Zapisz obraz (po)</StyledButton>
      <StyledButton onClick={toggleForm}>Dodaj jako zadanie</StyledButton>
      {deletionIsVisible ? <Deletion /> : null}
      {fullResultIsVisible ? <FullResult /> : null}
      {formIsVisible ? <NewDiagramForm close={closeForm} /> : null}
      {/* {diagramId ? (
        <ModalWithDiagramId id={diagramId} closeCallback={closeDiagram} />
      ) : null} */}
    </StyledWrapper>
  );
};

export default ToolButtons;
