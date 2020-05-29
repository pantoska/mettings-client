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
import { createMarker } from "../../../core/redux/map/markerAction";

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
  createMarker,
};

const EventForm = ({ createEvent, createMarker }) => {
  const [metting, setMetting] = useState({
    form: {
      description: "",
      place: "",
      title: "",
      type: "",
      image: "",
    },
    map: {
      coordinates: "",
    },
  });
  const classes = useStyles();

  const handleChangeForm = useCallback((event) => {
    const { name, value } = event.target;
    setMetting((prev) => ({
      ...prev,
      form: {
        ...prev.form,
        [name]: value,
      },
    }));
  }, []);

  const handleChangeMap = useCallback(
    (event) => {
      const { value } = event.target;
      const coordinates = value.split(" ");
      setMetting((prev) => ({
        ...prev,
        map: {
          longitude: coordinates[0],
          latitude: coordinates[1],
          description:
            "Title: " +
            metting.form.title +
            " Place: " +
            metting.form.place +
            " Type: " +
            metting.form.type,
        },
      }));
    },
    [metting.form.place, metting.form.title, metting.form.type]
  );

  let history = useHistory();

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      createMarker(metting.map);
      createEvent(metting.form);
      history.push(`/events`);
    },
    [createMarker, metting.map, metting.form, createEvent, history]
  );

  return (
    <Paper component="form" className={classes.root} onSubmit={handleSubmit}>
      <Typography>Event form</Typography>
      <TextField
        required
        label="Event title"
        value={metting.form.title}
        name="title"
        onChange={handleChangeForm}
        variant="outlined"
        margin="normal"
      />
      <TextField
        required
        label="Event description"
        value={metting.form.description}
        name="description"
        onChange={handleChangeForm}
        variant="outlined"
        margin="normal"
      />
      <TextField
        required
        label="Event Type"
        value={metting.form.type}
        name="type"
        onChange={handleChangeForm}
        variant="outlined"
        margin="normal"
      />
      <TextField
        required
        label="Place"
        value={metting.form.place}
        name="place"
        onChange={handleChangeForm}
        variant="outlined"
        margin="normal"
      />
      <TextField
        label="Image"
        value={metting.form.image}
        name="image"
        onChange={handleChangeForm}
        variant="outlined"
        margin="normal"
      />
      <TextField
        required
        label="Event place longitude and latitude"
        value={metting.coordinates}
        name="coordinates"
        onChange={handleChangeMap}
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
