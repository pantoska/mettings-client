import React from "react";
import { Route, Redirect } from "react-router";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  isAdmin: state.user.isAuth,
  isOpen: state.auth.open,
});

const enhance = connect(mapStateToProps);

const AdminRoute = ({
  component: Component,
  children,
  location,
  isAdmin,
  isOpen,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={({ props }) =>
        !isAdmin ? (
          <Component {...rest} {...props} />
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

export default enhance(AdminRoute);
