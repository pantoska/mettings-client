import React from "react";
import { Route, Redirect } from "react-router";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  isAdmin: state.login.isAdmin,
  isOpen: state.login.open,
});

const enhance = connect(mapStateToProps);

const GuestRoute = ({ children, isAdmin, isOpen, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !isAdmin && !isOpen ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/events",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default enhance(GuestRoute);
