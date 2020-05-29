import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { getEvents, deleteEvent } from "../../core/redux/events/eventsAction";
import { checkUserInfo } from "../../core/redux/auth/userActions";

import EventCard from "../../components/EventCard";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
    },
  }),
  {
    name: "EventsDashboard",
  }
);

const mapStateToProps = (state) => ({
  events: state.events.allEvents,
  userId: state.user.id,
});

const mapDispatchToProps = {
  getEvents,
  deleteEvent,
  checkUserInfo,
};

const enhance = connect(mapStateToProps, mapDispatchToProps);

const EventsDashboard = ({
  events,
  userId,
  getEvents,
  deleteEvent,
  checkUserInfo,
}) => {
  const classes = useStyles();

  useEffect(() => {
    getEvents();
    checkUserInfo();
  }, [getEvents, checkUserInfo]);

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Grid container>
          {events.map((el) => (
            <Grid item key={el.id}>
              <EventCard
                key={el.id}
                currentUserId={userId}
                handleRemoveEvent={() => deleteEvent(el.id)}
                {...el}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default enhance(EventsDashboard);
