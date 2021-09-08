import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { TodoList } from '../todo-list';
import { TicketList, Incidences } from '../ticket-list';
import { Home } from '../home';
import { Login } from '../views/Login';
import { BasicLayout } from '../views/layouts';

// views

const Routers = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <Route>
          <BasicLayout>
            <Switch>
              <Route path="/incidences">
                <Incidences />
              </Route>
              <Route path="/todos">
                <TodoList />
              </Route>
              <Route path="/ticket-list">
                <TicketList />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </BasicLayout>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routers;
