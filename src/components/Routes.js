import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Quote from "./Quote";
import Home from "./Home";

const Routes = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/calculator" component={Calculator} />
          <Route path="/quote" component={Quote} />
        </Switch>
      </BrowserRouter>
    );
  };

export default Routes;