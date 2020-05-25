import React from "react";
import { Route, Redirect } from "react-router";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  isAuth: state.user.isAuth,
});

const enhance = connect(mapStateToProps);

const UserRoute = ({
  component: Component,
  children,
  location,
  isAuth,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={({ props }) =>
        isAuth ? (
          <Component {...rest} {...props} />
        ) : (
          // children
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
