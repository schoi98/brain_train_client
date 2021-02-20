import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../Home/Home';
import Drill from'../Drill/Drill';

const App = () => (
  <BrowserRouter>
    <Container maxwidth = "lg">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/problems" exact component={Drill} />
      </Switch>
    </Container>
  </BrowserRouter>
);

export default App;
