import React from "react";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AppContextProvider } from "../context";
import Home from "../components/pages/Home";
import GameplayAnalysed from "../components/pages/GameplayAnalysed";
import MainTemplate from "../components/templates/MainTemplate";

const App = () => {
  return (
    <AppContextProvider>
      <MainTemplate>
        <Router>
          <Switch>
            <Route exact path="/gcg-report-viewer/">
              <Home />
            </Route>
            <Route path="/zadania">
              <GameplayAnalysed />
            </Route>
            <Route path="/analiza">
              <GameplayAnalysed />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </MainTemplate>
    </AppContextProvider>
  );
};

export default App;
