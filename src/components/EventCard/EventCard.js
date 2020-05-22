import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Button from "@material-ui/core/Button";
import ButtonBase from "@material-ui/core/ButtonBase";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "250px",
    margin: "20px",
  },
  media: {
    paddingTop: "60%",
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
    let path = `/offers/${props.id}`;
    history.push(path);
  }

  return (
    <div className="OfferCardWrapper">
      <Card className={classes.card}>
        <CardHeader title={props.title} />
        <CardMedia
          className={classes.media}
          image={setImage(props.image)}
          title={props.image}
        />
        <ButtonBase onClick={routeChange}>
          <CardContent>
            <Typography variant="subtitle1" color="textSecondary" component="p">
              {props.price}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" component="p">
              {props.place}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" component="p">
              {props.description}
            </Typography>
          </CardContent>
        </ButtonBase>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <Button size="small" color="primary">
            Show event
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default withRouter(EventCard);
