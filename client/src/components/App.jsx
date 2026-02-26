import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AppContextProvider } from '../context';
import Home from './pages/Home';
import GameplayAnalysed from './pages/GameplayAnalysed';
import MainTemplate from './templates/MainTemplate';
import GameEntry from './pages/GameEntry';
import GameEntry2 from './pages/gameEntry/GameEntry2';

export const backendUrl = "https://gcg-report-viewer.onrender.com";

const App = () => {
  return (
    <AppContextProvider>
      <MainTemplate>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gcg-report-viewer/" element={<Home />} />
            <Route path="/zadania" element={<GameplayAnalysed />} />
            <Route path="/analiza" element={<GameplayAnalysed />} />
            <Route path="/dodaj-zapis" element={<GameEntry2 />} />
          </Routes>
        </BrowserRouter>
      </MainTemplate>
    </AppContextProvider>
  );
};

export default App;
