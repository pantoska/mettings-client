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

const Routes = () => (
  <Switch>
    <GuestRoute exact path="/">
      <LoginPage />
    </GuestRoute>
    {/* <UserRoute exact path="/" component={EventsPage} /> */}
    <GuestRoute exact path="/login" component={LoginPage} />
    <AdminRoute exact path="/admin" component={AdminPage} />
    {/* <LoginPage />
    </GuestRoute> */}
    <GuestRoute exact path="/register" component={RegisterPage} />
    {/* <RegisterPage />
    </GuestRoute> */}
    <UserRoute exact path="/events/add" component={EventFormPage} />
    {/* <EventFormPage />
    </UserRoute> */}
    <UserRoute exact path="/events" component={EventsPage} />
    {/* <EventsPage />
    </UserRoute> */}
    <UserRoute exact path="/events/map" component={MapPage} />
    <UserRoute exact path="/events/:id" component={EventPage} />
    {/* <EventPage />
    </UserRoute> */}
    <Route component={NotFoundPage} />
    {/* <NotFoundPage />
    </Route> */}
  </Switch>
);

export default Routes;
