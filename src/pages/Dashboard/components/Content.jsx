import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../screens';

function Content() {
  return (
    <Switch>
      <Route path="/dashboard/home" exact>
        <Home />
      </Route>
    </Switch>
  );
}

export default Content;