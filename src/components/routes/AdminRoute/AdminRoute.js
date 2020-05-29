import React from "react";
import { Route, Redirect } from "react-router";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  isAdmin: state.user.isAdmin,
});

const enhance = connect(mapStateToProps);

const AdminRoute = ({ component: Component, location, isAdmin, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAdmin ? (
          <Component {...props} />
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
