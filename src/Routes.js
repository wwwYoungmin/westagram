import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Profile from "./Pages/Profile/Profile";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/profile/:id" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
