import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { compose } from "recompose";
import { connect } from "react-redux";

import { logout } from "../../core/redux/login/loginActions";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  title: {
    flexGrow: 1,
  },
}));

const mapStateToProps = (state) => ({
  isOpen: state.login.open,
});

const mapDispatchToProps = {
  logout,
};

const enhance = compose(connect(mapStateToProps, mapDispatchToProps));

const Navbar = ({ logout, isOpen }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Events
          </Typography>
          {isOpen && (
            <Button
              color="inherit"
              onClick={() => {
                logout();
              }}
            >
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default enhance(Navbar);
