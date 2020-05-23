import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";

import Container from "@material-ui/core/Container";

import Grid from "@material-ui/core/Grid";

import { compose } from "recompose";
import { connect } from "react-redux";
import { getEvents } from "../../core/redux/events/eventsAction";
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
});

const mapDispatchToProps = {
  getEvents,
};

const enhance = compose(connect(mapStateToProps, mapDispatchToProps));

const EventsDashboard = ({ events, getEvents }) => {
  const classes = useStyles();

  useEffect(() => {
    getEvents();
  }, [getEvents]);

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Grid container>
          {events.map((el) => (
            <Grid item key={el.id}>
              <EventCard key={el.id} {...el} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default enhance(EventsDashboard);
