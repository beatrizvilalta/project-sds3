import Dashbaord from 'pages/Dashboard';
import Home from 'pages/Home';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
const Routes = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/dashboard">
                <Dashbaord />
            </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default Routes;