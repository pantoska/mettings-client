import React from "react";
import { Route, Switch } from "react-router-dom";
import GuestRoute from "./components/GuestRoute";
import NotFoundPage from "./pages/NotFoundPage";
import UserRoute from "./components/UserRoute";

const Routes = () => (
  <Switch>
    <GuestRoute exact path="/"></GuestRoute>
    <UserRoute path="/dashboard"></UserRoute>
    <Route>
      <NotFoundPage />
    </Route>
  </Switch>
);

export default Routes;
