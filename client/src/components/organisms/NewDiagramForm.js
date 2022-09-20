import React, { useRef, useState } from 'react';
import { Form } from 'semantic-ui-react';
import styled from 'styled-components';

import useAddDiagramToBase from '../../hooks/useAddDiagramToBase';
import InputTag from '../atoms/InputTag';

const StyledWrapper = styled.div`
  position: absolute;
  width: 360px;
  backdrop-filter: blur(2px) saturate(152%);
  -webkit-backdrop-filter: blur(2px) saturate(152%);
  background-color: rgba(60, 161, 92, 0.85);
  border-radius: 12px;
  // border: 1px solid rgba(255, 255, 255, 0.125);
  // border: 3px solid #06912c;
  z-index: 10;
  top: 50%;
  left: 50vw;
  padding: 15px;
  transform: translate(-50%, -50%);
  box-shadow: rgba(0, 0, 0, 0.8) 0px 18px 50px -10px;

  button.positive {
    background-color: #03252b !important;
  }
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RadioWrapper = styled(Form.Group)`
  display: flex;
  justify-content: center;
`;

const NewDiagramForm = ({ close }) => {
  const [tags, setTags] = useState([]);
  const [diagramIsPublic, setDiagramIsPublic] = useState(false);
  const [diagramId, setDiagramId] = useState('');
  const { addDiagramCallback } = useAddDiagramToBase();

  const handleChange = (e, { value }) => setDiagramIsPublic(value);
  const handleSubmit = () => {
    addDiagramCallback(diagramIsPublic, tags);
    close();
  };
  const addDiagram = () => addDiagramCallback().then((res) => setDiagramId(res));

  return (
    <StyledWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <RadioWrapper>
          <Form.Radio
            label="publiczne"
            name="radioGroup"
            value={true}
            checked={diagramIsPublic}
            onChange={handleChange}
          />
          <Form.Radio
            label="prywatne"
            name="radioGroup"
            value={false}
            checked={!diagramIsPublic}
            onChange={handleChange}
          />
        </RadioWrapper>
        <InputTag tags={tags} setTags={setTags} />
        <Form.Button positive type="submit">
          Zapisz
        </Form.Button>
      </StyledForm>
    </StyledWrapper>
  );
};

export default NewDiagramForm;
