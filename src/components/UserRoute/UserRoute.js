import React from "react";
import { Route, Redirect } from "react-router";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  isAdmin: state.login.isAdmin,
  isOpen: state.login.open,
});

const enhance = connect(mapStateToProps);

const UserRoute = ({ children, isAdmin, isOpen, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isOpen ? (
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
