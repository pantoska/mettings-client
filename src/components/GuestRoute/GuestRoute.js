import React from "react";
import { Route, Redirect } from "react-router";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  isOpen: state.login.open,
});

const enhance = connect(mapStateToProps);

const GuestRoute = ({ children, isAuth, isOpen, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !isAuth || isOpen ? (
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
