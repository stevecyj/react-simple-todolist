import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// views
import Login from '../views/Login';
export default () => {
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
    </Switch>
  </Router>;
};
