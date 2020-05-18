import React from "react";
import { makeStyles } from "@material-ui/core";
import Navbar from "../../components/Navbar";

import { compose } from "recompose";
import { connect } from "react-redux";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      flexGrow: 1,
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    },
  }),
  {
    name: "EventsPage",
  }
);

const mapStateToProps = (state) => ({
  isAdmin: state.login.isAdmin,
});

const enhance = compose(connect(mapStateToProps, null));

const DashboardPage = ({ isAdmin }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />
    </div>
  );
};

DashboardPage.propTypes = {};

export default enhance(DashboardPage);
