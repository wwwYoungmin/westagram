import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Profile from "./Pages/Profile/Profile";
import Message from "./Pages/Message/Message";
import NavBar from "./Components/NavBar/NavBar";

function Routes() {
  return (
    <BrowserRouter>
        <Route component={NavBar} />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/profile/:id" component={Profile} />
        <Route exact path="/profile/:message" component={Message} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
