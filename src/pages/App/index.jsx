import React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import Settings from "./Settings";
import Dashboard from "./Admin/admin";
import Keyword from "./keywords";

function App(props) {
  const {
    match: { path },
  } = props;

  return (
    <div>
      <Switch>
        <Route path={path} exact>
          <Redirect to={`${path}/dashboard`} />
        </Route>
        <Route path={`${path}/dashboard`} exact>
          <Dashboard />
        </Route>
        <Route path={`${path}/talent`} exact>
          <Keyword />
        </Route>
        <Route path={`${path}/users`} exact>
          < Dashboard />
        </Route>
        <Route path={`${path}/settings`} exact>
          <Settings />
        </Route>
      </Switch>
    </div>
  );
}
export default withRouter(App);
