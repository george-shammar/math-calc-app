import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Quote from './Quote';
import App from './App';
import Navbar from './Navbar';

const Routes = () => (
  <div>
    <nav>
      <Navbar />
    </nav>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/calculator" component={App} />
        <Route exact path="/quote" component={Quote} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default Routes;
