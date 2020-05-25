import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { withRouter } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import { compose } from "recompose";
import { connect } from "react-redux";
import { getEventById } from "../../core/redux/events/eventsAction";

import CommentForm from "../Comment/CommentForm";
import Comment from "../Comment/Comment";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      margin: "20px",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      alignContent: "flex-start",
      justifyContent: "flex-start",
      // flexWrap: "wrap",
    },
    media: {
      height: "300px",
      width: "350px",
    },
    content: {},
  }),
  {
    name: "EventsDashboard",
  }
);

const mapStateToProps = (state) => ({
  event: state.events.event,
});

const mapDispatchToProps = {
  getEventById,
};

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
);

const setImage = (image) => {
  const pattern = /^((http|https|ftp):\/\/)/;

  if (pattern.test(image)) {
    return image;
  } else {
    return "https://ak2.picdn.net/shutterstock/videos/29439562/thumb/1.jpg";
  }
};

const Event = ({ event, getEventById, ...props }) => {
  const classes = useStyles();

  useEffect(() => {
    getEventById(props.match.params.id);
  }, [getEventById, props.match.params.id]);

  if (!event) {
    return null;
  }

  return (
    <div>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          component="img"
          alt="Event image"
          height="140"
          image={setImage(event.image)}
          title="Event image"
        />
        <CardContent>
          <Typography gutterBottom variant="h6">
            {event.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Description: {event.description}
          </Typography>
          <Typography gutterBottom color="textSecondary" component="h2">
            Place: {event.place}
          </Typography>
          <Typography gutterBottom color="textSecondary" component="h2">
            Type: {event.type}
          </Typography>
        </CardContent>
      </Card>
      <CommentForm id={props.match.params.id} />
      {event.commentList.map((el) => (
        <Comment
          key={el.id.timestamp}
          userId={el.userId}
          content={el.content}
          date={el.date}
        />
      ))}
    </div>
  );
};

export default enhance(Event);
