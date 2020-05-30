import React from "react";

import { makeStyles, Card, Typography } from "@material-ui/core";
import { getUserById } from "../../core/redux/auth/userActions";

import { compose } from "recompose";
import { connect } from "react-redux";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      minWidth: "350px",
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
    name: "Comments",
  }
);

const mapStateToProps = (state) => ({
  name: state.user.name,
  surname: state.user.surname,
});

const mapDispatchToProps = {
  getUserById,
};

const enhance = compose(connect(mapStateToProps, mapDispatchToProps));

const Comment = ({ getUserById, userId, ...props }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Typography>{props.user}</Typography>
      <Typography>
        {props.date.dayOfMonth} {props.date.month} {props.date.year}{" "}
        {props.date.hour}:{props.date.minute}
      </Typography>
      <Typography>{props.content}</Typography>
    </Card>
  );
};

export default enhance(Comment);
