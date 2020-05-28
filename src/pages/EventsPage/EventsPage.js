import React from "react";
import { makeStyles } from "@material-ui/core";
import PageLayout from "../../layout/PageLayout";

import { compose } from "recompose";
import { connect } from "react-redux";
import EventsDashboard from "../../containers/EventsDashboard/EventsDashboard";
import Searcher from "./Searcher";

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
  isAdmin: state.auth.isAdmin,
});

const enhance = compose(connect(mapStateToProps, null));

const EventsPage = ({ isAdmin }) => {
  const classes = useStyles();

  return (
    <PageLayout>
      <div className={classes.root}>
        <Searcher />
        <EventsDashboard />
      </div>
    </PageLayout>
  );
};

export default enhance(EventsPage);
