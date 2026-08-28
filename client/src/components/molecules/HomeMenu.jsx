import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import ReportReader from '../../services/ReportReader';
import WooglesReader from '../../services/WooglesReader';
import { useAppContext } from '../../context';
import { actionTypes } from '../../reducers/gameReducer';

const StyledWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  min-height: 200px;
  line-height: 200px;
  z-index: 2;
`;

const OptionsRow = styled.div`
  display: flex;
`;

const Options = styled.a`
  font-size: 35px;
  display: block;
  color: #3c4a3e;
  text-transform: uppercase;
  position: relative;
  margin-left: 25px;
  margin-right: 25px;
  &:visited {
    color: #3c4a3e;
  }
  &:hover {
    color: #96b364;
  }

  &:hover:before {
    opacity: 1;
    width: 200px;
  }

  &:before {
    position: absolute;
    content: '';
    width: 130px;
    height: 2px;
    background: #3c4a3e;
    bottom: 70px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: 0.4s;
  }
  &:first-of-type::after {
    content: '';
    position: absolute;
    width: 3px;
    height: 80px;
    transform: rotate(15deg);
    background: #3c4a3e;
    top: 60px;
    right: -25px;
  }
`;
const HiddenInput = styled.input`
  display: none;
`;

const WooglesForm = styled.form`
  margin-top: 20px;
  line-height: normal;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const WooglesInput = styled.input`
  width: 320px;
  padding: 8px 12px;
  border-radius: 6px;
  border: none;
  font-size: 14px;
`;

const WooglesButton = styled.button`
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  background: #3c4a3e;
  color: white;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    background: #96b364;
  }
`;

const WooglesError = styled.span`
  color: #ffdede;
  font-size: 13px;
`;

const HomeMenu = () => {
  const { dispatch } = useAppContext();
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const [wooglesLink, setWooglesLink] = useState('');
  const [wooglesError, setWooglesError] = useState('');

  const handleNewFile = (list) => {
    dispatch({ type: actionTypes.setMovesArray, payload: [...list] });
    navigate('/analiza');
  };

  const handleWooglesSubmit = async (e) => {
    e.preventDefault();
    if (!wooglesLink.trim()) return;
    setWooglesError('');
    try {
      const movesArray = await new WooglesReader().fetchGame(wooglesLink);
      handleNewFile(movesArray);
    } catch (error) {
      setWooglesError('Nie udało się pobrać partii z woogles.io');
    }
  };

  return (
    <StyledWrapper data-testid="home-menu">
      <HiddenInput ref={inputRef} type="file" onInput={(e) => new ReportReader().readReport(e, handleNewFile)} />
      <OptionsRow>
        <Options href="#" onClick={() => inputRef.current.click()}>
          Analizuj partię
        </Options>
        <Options onClick={() => navigate('/dodaj-zapis')}>Rozwiązuj zadania</Options>
      </OptionsRow>
      <WooglesForm onSubmit={handleWooglesSubmit}>
        <WooglesInput
          type="text"
          placeholder="Wklej link do partii z woogles.io"
          value={wooglesLink}
          onChange={(e) => setWooglesLink(e.target.value)}
        />
        <WooglesButton type="submit">Analizuj</WooglesButton>
        {wooglesError && <WooglesError>{wooglesError}</WooglesError>}
      </WooglesForm>
    </StyledWrapper>
  );
};

export default HomeMenu;
