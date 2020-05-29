import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  Typography,
  IconButton,
  CardActionArea,
  CardContent,
  CardActions,
  Button,
  CardMedia,
  Card,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    width: "250px",
    margin: "20px",
  },
  media: {
    height: 180,
  },
  updateButton: {
    margin: theme.spacing(1),
    backgroundColor: "#AC3B61",
    color: "#EEE2DC",
    "&:hover": {
      color: "#000000",
      backgroundColor: "BAB2B5",
    },
  },
}));

const setImage = (image) => {
  const pattern = /^((http|https|ftp):\/\/)/;

  if (pattern.test(image)) {
    return image;
  } else {
    return "https://ak2.picdn.net/shutterstock/videos/29439562/thumb/1.jpg";
  }
};

const EventCard = (props) => {
  const classes = useStyles();
  let history = useHistory();

  function routeUpdateEvent() {
    let path = `/events/update/${props.id}`;
    history.push(path);
  }

  function routeChangeEvent() {
    let path = `/events/${props.id}`;
    history.push(path);
  }

  return (
    <div className="OfferCardWrapper">
      <Card className={classes.root}>
        <CardActionArea onClick={routeChangeEvent}>
          <CardMedia
            className={classes.media}
            image={setImage(props.image)}
            title={props.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" component="p">
              Place: {props.place}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        {props.currentUserId === props.userId && (
          <CardActions>
            <Button
              type="submit"
              variant="contained"
              className={classes.updateButton}
              onClick={routeUpdateEvent}
            >
              Update
            </Button>

            <IconButton aria-label="delete" onClick={props.handleRemoveEvent}>
              <DeleteIcon />
            </IconButton>
          </CardActions>
        )}
      </Card>
    </div>
  );
};

export default withRouter(EventCard);
