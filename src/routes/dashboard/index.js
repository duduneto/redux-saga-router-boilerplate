import React from "react";
import { useSelector } from 'react-redux';
import { Switch, Route, useHistory } from "react-router";
import { Dashboard, Login } from '../../pages';


function DashboardPage() {
  const logged = useSelector(state => state.auth.logged);

  const history = useHistory();

  React.useEffect(() => {
    console.log('Logged => ', logged);
    if(!logged) {
      history.push("/dashboard/login")
    }
  }, [logged]);

  return (
    <Switch>
      <Route path="/dashboard/login" exact>
        <Login />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
}

export default DashboardPage;
