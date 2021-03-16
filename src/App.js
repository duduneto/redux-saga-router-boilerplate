import React from "react";
import { Switch, Route } from "react-router";
import "./App.scss";
import { Login } from './pages'

import Posts from "./components/post/Posts";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <div className="App">
          <Posts />
        </div>
      </Route>
      <Route path="/dashboard/login" exact>
        <Login />
      </Route>
    </Switch>
  );
}

export default App;
