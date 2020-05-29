import React, { useState, useCallback, useEffect } from "react";
import {
  TextField,
  makeStyles,
  Button,
  Paper,
  Typography,
} from "@material-ui/core";
import { connect } from "react-redux";
import { updateEvent } from "../../../core/redux/events/eventsAction";
import { useHistory } from "react-router-dom";

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
    name: "UpdateForm",
  }
);

const mapDispatchToProps = {
  updateEvent,
};

const UpdateEventForm = ({ metting, updateEvent }) => {
  const classes = useStyles();
  let history = useHistory();

  const [updateMetting, setUpdateMetting] = useState({
    description: "",
    place: "",
    title: "",
    type: "",
    image: "",
  });

  useEffect(() => {
    setUpdateMetting(() => ({
      id: metting.id,
      description: metting.description,
      place: metting.place,
      title: metting.title,
      type: metting.type,
      image: metting.image,
    }));
  }, [
    metting.id,
    metting.description,
    metting.image,
    metting.place,
    metting.title,
    metting.type,
  ]);

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setUpdateMetting((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      updateEvent(updateMetting);
      history.push(`/events/`);
    },
    [history, updateEvent, updateMetting]
  );

  return (
    <Paper component="form" className={classes.root} onSubmit={handleSubmit}>
      <Typography>Update Event form</Typography>
      <TextField
        required
        label="Event title"
        value={updateMetting.title}
        name="title"
        onChange={handleChange}
        variant="outlined"
        margin="normal"
      />
      <TextField
        required
        label="Event description"
        value={updateMetting.description}
        name="description"
        onChange={handleChange}
        variant="outlined"
        margin="normal"
      />
      <TextField
        required
        label="Event Type"
        value={updateMetting.type}
        name="type"
        onChange={handleChange}
        variant="outlined"
        margin="normal"
      />
      <TextField
        required
        label="Place"
        value={updateMetting.place}
        name="place"
        onChange={handleChange}
        variant="outlined"
        margin="normal"
      />
      <TextField
        label="Image"
        value={updateMetting.image}
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
        Update
      </Button>
    </Paper>
  );
};

export default connect(null, mapDispatchToProps)(UpdateEventForm);
