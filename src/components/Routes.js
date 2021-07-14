import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Quote from './Quote';
import App from './App';
import Navbar from './Navbar';

const Routes = () => (
  <BrowserRouter>
    <div>
      <nav>
        <Navbar />
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/calculator" component={App} />
        <Route exact path="/quote" component={Quote} />
      </Switch>
    </div>
  </BrowserRouter>

);

export default Routes;
