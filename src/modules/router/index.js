import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { TodoList } from '../todo-list';
import { TicketList, Incidences } from '../ticket-list';
import { Home } from '../home';
import { Login } from '../views/Login';

// views

export default () => {
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
    </Switch>
  </Router>;
};
