import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AppContextProvider } from '../context';
import Home from '../components/pages/Home';
import GameplayAnalysed from '../components/pages/GameplayAnalysed';
import MainTemplate from '../components/templates/MainTemplate';
import GameEntry from './pages/GameEntry';

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
            <Route path="/dodaj-zapis" element={<GameEntry />} />
          </Routes>
        </BrowserRouter>
      </MainTemplate>
    </AppContextProvider>
  );
};

export default App;
