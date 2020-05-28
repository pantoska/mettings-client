import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
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

  function routeChange() {
    let path = `/events/${props.id}`;
    history.push(path);
  }

  return (
    <div className="OfferCardWrapper">
      <Card className={classes.root}>
        <CardActionArea onClick={routeChange}>
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
      </Card>
    </div>
  );
};

export default withRouter(EventCard);
