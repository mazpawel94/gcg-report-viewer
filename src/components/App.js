import React, { useReducer } from "react";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppContext from "../context";
import Home from "../components/pages/Home";
import GameplayAnalysed from "../components/pages/GameplayAnalysed";
import MainTemplate from "../components/templates/MainTemplate";
import { initialState, reducer } from "../reducers/gameReducer";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
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
          </Switch>
        </Router>
      </MainTemplate>
    </AppContext.Provider>
  );
};

export default App;
