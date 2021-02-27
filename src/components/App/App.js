import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../Home/Home';
import Drill from'../Drill/Drill';
import Results from '../Results/Results';

const App = () => (
  <BrowserRouter>
    <Container maxwidth = "lg">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/problems" exact component={Drill} />
        <Route path="/results" exact component={Results} />
      </Switch>
    </Container>
  </BrowserRouter>
);

export default App;
