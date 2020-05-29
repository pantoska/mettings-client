import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";

import {
  TextField,
  makeStyles,
  Button,
  Paper,
  Typography,
} from "@material-ui/core";
import { connect } from "react-redux";
import { createEvent } from "../../../core/redux/events/eventsAction";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      minWidth: "350px",
      maxWidth: "70%",
      padding: theme.spacing(3, 3),
      display: "flex",
      flexDirection: "column",
      backgroundColor: "rgba(255,255,255,0.3)",
    },
    submitButton: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      backgroundColor: "#AC3B61",
      color: "#EEE2DC",
      "&:hover": {
        color: "#000000",
        backgroundColor: "BAB2B5",
      },
    },
    register: {
      color: "#AC3B61",
      fontSize: "13px",
    },
  }),
  {
    name: "RegisterForm",
  }
);

const mapDispatchToProps = {
  createEvent,
};

const EventForm = ({ createEvent }) => {
  const [metting, setMetting] = useState({
    description: "",
    place: "",
    title: "",
    type: "",
    image: "",
  });
  const classes = useStyles();

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setMetting((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  let history = useHistory();

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      createEvent(metting);
      history.push(`/events/`);
    },
    [createEvent, metting, history]
  );

  return (
    <Paper component="form" className={classes.root} onSubmit={handleSubmit}>
      <Typography>Event form</Typography>
      <TextField
        required
        label="Event title"
        value={metting.title}
        name="title"
        onChange={handleChange}
        variant="outlined"
        margin="normal"
      />
      <TextField
        required
        label="Event description"
        value={metting.description}
        name="description"
        onChange={handleChange}
        variant="outlined"
        margin="normal"
      />
      <TextField
        required
        label="Event Type"
        value={metting.type}
        name="type"
        onChange={handleChange}
        variant="outlined"
        margin="normal"
      />
      <TextField
        required
        label="Place"
        value={metting.place}
        name="place"
        onChange={handleChange}
        variant="outlined"
        margin="normal"
      />
      <TextField
        label="Image"
        value={metting.image}
        name="image"
        onChange={handleChange}
        variant="outlined"
        margin="normal"
      />
      <Button
        type="submit"
        variant="contained"
        className={classes.submitButton}
      >
        Submit
      </Button>
    </Paper>
  );
};

export default connect(null, mapDispatchToProps)(EventForm);
