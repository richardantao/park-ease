import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";
import Checkout from "./components/pages/Checkout/Checkout";
import Sessions from "./components/pages/Sessions";

import "./App.scss";

class App extends Component {
  render() {
    return (
        <Switch>
          <Route name="login" path="/login" component={Login}/>
          <Route name="dashboard" path="/app/dashboard" component={Dashboard}/>
          <Route path="/app/checkout" component={Checkout}/>
          <Route name="session" path="/app/sessions" component={Sessions}/>
        </Switch>
    );
  };
};

export default withRouter(App);
