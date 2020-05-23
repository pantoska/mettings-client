import React from "react";
import { makeStyles } from "@material-ui/core";
import PageLayout from "../../layout/PageLayout";

import { compose } from "recompose";
import { connect } from "react-redux";
import EventForm from "./EventForm/EventForm";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      // flexDirection: "column",
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

const EventFormPage = ({ isAdmin }) => {
  const classes = useStyles();

  return (
    <PageLayout>
      <div className={classes.root}>
        <EventForm />
      </div>
    </PageLayout>
  );
};

export default enhance(EventFormPage);
