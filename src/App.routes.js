import React from "react";
import { Route, Switch } from "react-router-dom";
import GuestRoute from "./components/GuestRoute";
import NotFoundPage from "./pages/NotFoundPage";
import UserRoute from "./components/UserRoute";
import LoginPage from "./pages/LoginPage";
import EventsPage from "./pages/EventsPage/EventsPage";

const Routes = () => (
  <Switch>
    <GuestRoute exact path="/">
      <LoginPage />
    </GuestRoute>
    <UserRoute path="/events">
      <EventsPage />
    </UserRoute>
    <Route>
      <NotFoundPage />
    </Route>
  </Switch>
);

export default Routes;
