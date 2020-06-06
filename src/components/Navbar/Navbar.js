import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { compose } from "recompose";
import { connect } from "react-redux";

import { logout, checkAuth } from "../../core/redux/auth/userActions";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#AC3B61",
  },
  header: {
    textDecoration: "none",
    flexGrow: 1,
    color: "#EEE2DC",
    letterSpacing: "3px",
    textTransform: "uppercase",
    margin: "10px",
  },
  title: {
    flexGrow: 1,
  },
}));

const mapStateToProps = (state) => ({
  isAuth: state.user.isAuth,
  isAdmin: state.user.isAdmin,
});

const mapDispatchToProps = {
  logout,
  checkAuth,
};

const enhance = compose(connect(mapStateToProps, mapDispatchToProps));

const Navbar = ({ logout, isAuth, isAdmin, checkAuth }) => {
  const classes = useStyles();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const routeChange = () => {
    logout();
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <NavLink to="/" className={classes.header}>
              Mettings
            </NavLink>
          </Typography>
          {isAuth && (
            <div>
              {isAdmin && (
                <NavLink to="/admin" exact={true} className={classes.header}>
                  Admin panel
                </NavLink>
              )}
              <NavLink to="/events/map" exact={true} className={classes.header}>
                Show map
              </NavLink>
              <NavLink to="/events/add" exact={true} className={classes.header}>
                Add event
              </NavLink>
              <Button color="inherit" onClick={routeChange}>
                Logout
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default enhance(Navbar);
