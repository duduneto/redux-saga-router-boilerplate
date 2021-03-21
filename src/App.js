import React from "react";
import { Switch, Route } from "react-router";
import "./App.scss";
import { Dashboard } from './routes';

import Posts from "./components/post/Posts";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <div className="App">
          <Posts />
        </div>
      </Route>
      <Dashboard />
    </Switch>
  );
}

export default App;
