import React from 'react';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';

import BarraDeBusca from './components/busca/index';
import Listagem from './components/listagem/index';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={BarraDeBusca} />
      <Route path="/busca/:busca" component={withRouter(Listagem)} />
    </Switch>
  </BrowserRouter>
)

export default Router;