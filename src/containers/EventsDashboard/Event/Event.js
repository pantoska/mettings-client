import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { useParams } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import { compose } from "recompose";
import { connect } from "react-redux";
import { getEventById } from "../../../core/redux/events/eventsAction";

import CommentForm from "../../Comment/CommentForm";
import Comment from "../../Comment/Comment";

const useStyles = makeStyles(
  (theme) => ({
    container: {
      width: "60%",
      padding: "20px",
    },
    root: {
      // margin: "20px",
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
  userDataComments: state.events.usersDataComments,
});

const mapDispatchToProps = {
  getEventById,
};

const enhance = compose(connect(mapStateToProps, mapDispatchToProps));

const setImage = (image) => {
  const pattern = /^((http|https|ftp):\/\/)/;

  if (pattern.test(image)) {
    return image;
  } else {
    return "https://ak2.picdn.net/shutterstock/videos/29439562/thumb/1.jpg";
  }
};

const Event = ({ event, userDataComments, getEventById, ...props }) => {
  const classes = useStyles();
  const eventId = useParams();
  const users = [];

  useEffect(() => {
    getEventById(eventId.id);
  }, [eventId.id, getEventById, userDataComments]);

  userDataComments.forEach((el) =>
    users.push(el.data.firstName + " " + el.data.lastName)
  );

  return (
    <div className={classes.container}>
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
      <CommentForm id={eventId.id} />
      {event.commentList.map((el, index) => (
        <Comment
          key={el.id.timestamp}
          user={users[index]}
          content={el.content}
          date={el.date}
        />
      ))}
    </div>
  );
};

export default enhance(Event);
