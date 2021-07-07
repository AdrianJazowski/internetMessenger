/** @format */

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="app">
      <Router>
        <>
          <Header />
          <AppBody>
            <Sidebar />
            <Switch>
              <Route exact path="/"></Route>
              {/* chat */}
            </Switch>
          </AppBody>
        </>
      </Router>
    </div>
  );
};

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
