import React, { useState, useCallback } from "react";

import { TextField, makeStyles, Button, Paper } from "@material-ui/core";

import { compose } from "recompose";
import { connect } from "react-redux";
import { getEventByType } from "../../../core/redux/events/eventsAction";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      margin: "30px",
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(1, 3),
      backgroundColor: "rgba(255,255,255,0.6)",
      flexDirection: "row",
    },
    submitButton: {
      margin: theme.spacing(2),
      marginBottom: theme.spacing(2),
      backgroundColor: "#AC3B61",
      color: "#EEE2DC",
      "&:hover": {
        color: "#000000",
        backgroundColor: "BAB2B5",
      },
    },
  }),
  {
    name: "Searcher",
  }
);

const mapStateToProps = (state) => ({
  events: state.events.allEvents,
});

const mapDispatchToProps = {
  getEventByType,
};

const enhance = compose(connect(mapStateToProps, mapDispatchToProps));

const Searcher = ({ getEventByType }) => {
  const classes = useStyles();

  const [searcher, setSearcher] = useState({
    type: "",
  });

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      getEventByType(searcher.type);
    },
    [getEventByType, searcher]
  );

  return (
    <Paper component="form" className={classes.root} onSubmit={handleSubmit}>
      <TextField
        label="Search event"
        value={searcher.type}
        name="search event"
        onChange={(event) => setSearcher({ type: event.target.value })}
        variant="outlined"
        margin="normal"
      />
      <Button
        type="submit"
        variant="contained"
        className={classes.submitButton}
      >
        Search
      </Button>
    </Paper>
  );
};

export default enhance(Searcher);
