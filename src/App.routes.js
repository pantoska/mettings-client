import React from "react";
import { Route, Switch } from "react-router-dom";
import GuestRoute from "./components/routes/GuestRoute";
import NotFoundPage from "./pages/NotFoundPage";
import UserRoute from "./components/routes/UserRoute";
import AdminRoute from "./components/routes/AdminRoute";
import LoginPage from "./pages/LoginPage";
import EventsPage from "./pages/EventsPage/EventsPage";
import RegisterPage from "./pages/RegisterPage";
import EventFormPage from "./pages/EventFormPage";
import EventPage from "./pages/EventPage";
import MapPage from "./pages/MapPage";
import AdminPage from "./pages/AdminPage";
import UpdateEventPage from "./pages/EventsPage/UpdateEventPage";

const Routes = () => (
  <Switch>
    <GuestRoute exact path="/login" component={LoginPage} />
    <GuestRoute exact path="/register" component={RegisterPage} />

    <AdminRoute exact path="/admin" component={AdminPage} />

    <UserRoute exact path="/" component={EventsPage} />
    <UserRoute exact path="/events" component={EventsPage} />
    <UserRoute exact path="/events/add" component={EventFormPage} />
    <UserRoute exact path="/events/map" component={MapPage} />
    <UserRoute exact path="/events/:id" component={EventPage} />
    <UserRoute exact path="/events/update/:id" component={UpdateEventPage} />
    <Route component={NotFoundPage} />
  </Switch>
);

export default Routes;
