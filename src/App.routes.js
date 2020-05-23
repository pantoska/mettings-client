import React from "react";
import { Route, Switch } from "react-router-dom";
import GuestRoute from "./components/routes/GuestRoute";
import NotFoundPage from "./pages/NotFoundPage";
import UserRoute from "./components/routes/UserRoute";
import LoginPage from "./pages/LoginPage";
import EventsPage from "./pages/EventsPage/EventsPage";
import RegisterPage from "./pages/RegisterPage";
import EventFormPage from "./pages/EventFormPage";

const Routes = () => (
  <Switch>
    <GuestRoute exact path="/">
      <LoginPage />
    </GuestRoute>
    <GuestRoute exact path="/register">
      <RegisterPage />
    </GuestRoute>
    <UserRoute exact path="/events/add">
      <EventFormPage />
    </UserRoute>
    <UserRoute exactpath="/events">
      <EventsPage />
    </UserRoute>
    <Route>
      <NotFoundPage />
    </Route>
  </Switch>
);

export default Routes;
