import React from "react";
import { Route, Redirect } from "react-router";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  isAuth: state.user.isAuth,
  isOpen: state.auth.open,
});

const enhance = connect(mapStateToProps);

const UserRoute = ({ children, isAuth, isOpen, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuth || isOpen ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default enhance(UserRoute);
