import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

import Deletion from '../molecules/Deletion';
import Button from '../atoms/Button';
import FullResult from '../organisms/FullResult/FullResult';
import useExportAsImage from '../../hooks/useExportAsImage';
import ModalWithDiagramId from '../molecules/ModalWithDiagramId';
import NewDiagramForm from './NewDiagramForm';

const StyledWrapper = styled.div`
  display: flex;
  width: 660px;
  justify-content: space-between;
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
      <Button onClick={toggleDeletion} clicked={deletionIsVisible}>
        Wykreślanka
      </Button>
      <Button onClick={toggleFullResult} clicked={fullResultIsVisible}>
        Pełny zapis
      </Button>
      <Button onClick={getImageBefore}>Zapisz obraz (przed)</Button>
      <Button onClick={getImageAfter}>Zapisz obraz (po)</Button>
      <Button onClick={toggleForm}>Dodaj jako zadanie</Button>
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
