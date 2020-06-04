import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import PageLayout from "../../layout/PageLayout";

import { compose } from "recompose";
import { connect } from "react-redux";
import UpdateEventForm from "../EventFormPage/UpdateEventForm";
import { getEventById } from "../../core/redux/events/eventsAction";

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
    name: "UpdateEventPage",
  }
);

const mapStateToProps = (state) => ({
  event: state.events.event,
});

const mapDispatchToProps = {
  getEventById,
};

const enhance = compose(connect(mapStateToProps, mapDispatchToProps));

const UpdateEventPage = ({ getEventById, event }) => {
  const classes = useStyles();
  const eventId = useParams();

  useEffect(() => {
    getEventById(eventId.id);
  }, [getEventById, eventId.id]);

  return (
    <PageLayout>
      <div className={classes.root}>
        <UpdateEventForm metting={event} />
      </div>
    </PageLayout>
  );
};

export default enhance(UpdateEventPage);
