import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Quote from './Quote';
import App from './App';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/calculator" component={App} />
      <Route path="/quote" component={Quote} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
