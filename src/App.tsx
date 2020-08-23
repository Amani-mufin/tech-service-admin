import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Login from "./pages/AdminLogin";
import Dashboard from "./pages/App/index";

function App() {
  return (
    <Switch>
      <Router>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/app">
          <Dashboard />
        </Route>
      </Router>
    </Switch>
  );
}

export default App;
