import React from "react";
import { Route, Redirect } from "react-router";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  isAuth: state.user.isAuth,
  isOpen: state.auth.open,
});

const enhance = connect(mapStateToProps);

const GuestRoute = ({
  component: Component,
  children,
  isAuth,
  isOpen,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !isAuth ? (
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
