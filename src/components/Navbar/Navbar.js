import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { compose } from "recompose";
import { connect } from "react-redux";

import { logout } from "../../core/redux/auth/authActions";
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
  title: {},
}));

const mapStateToProps = (state) => ({
  isAuth: state.user.isAuth,
  isOpen: state.auth.open,
});

const mapDispatchToProps = {
  logout,
};

const enhance = compose(connect(mapStateToProps, mapDispatchToProps));

const Navbar = ({ logout, isAuth }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <NavLink to="/" className={classes.header}>
              Events
            </NavLink>
          </Typography>
          {isAuth && (
            <div>
              <NavLink to="/events/map" exact={true} className={classes.header}>
                Show map
              </NavLink>
              <NavLink to="/events/add" exact={true} className={classes.header}>
                Add event
              </NavLink>
              <Button
                color="inherit"
                onClick={() => {
                  logout();
                }}
              >
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
