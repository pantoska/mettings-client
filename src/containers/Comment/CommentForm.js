import React, { useState, useCallback } from "react";

import {
  TextField,
  makeStyles,
  Button,
  Paper,
  Typography,
} from "@material-ui/core";

import { compose } from "recompose";
import { connect } from "react-redux";
import { createComment } from "../../core/redux/events/eventsAction";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      // minWidth: "350px",
      marginTop: "30px",
      marginBottom: "30px",
      padding: theme.spacing(3, 3),
      display: "flex",
      flexDirection: "column",
      alignContent: "center",
      justifyContent: "center",
      backgroundColor: "rgba(255,255,255,0.6)",
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
    name: "CommentForm",
  }
);

const mapStateToProps = (state) => ({
  event: state.events.event,
});

const mapDispatchToProps = {
  createComment,
};

const enhance = compose(connect(mapStateToProps, mapDispatchToProps));

const CommentForm = ({ event, createComment, id, ...props }) => {
  const classes = useStyles();

  const [comment, setComment] = useState({
    id: id,
    content: "",
  });

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setComment((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      createComment(comment);
      setComment({ id: id, content: "" });
    },
    [comment, createComment, id]
  );

  return (
    <Paper component="form" className={classes.root} onSubmit={handleSubmit}>
      <Typography>Comment panel</Typography>
      <TextField
        required
        multiline
        rows={3}
        label="Your comment"
        value={comment.content}
        name="content"
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

export default enhance(CommentForm);
