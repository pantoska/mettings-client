import React from "react";
import PageLayout from "../../layout/PageLayout";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "& > *": {
      marginTop: theme.spacing(2),
      textAlign: "center",
    },
  },
}));

function NotFoundPage() {
  const classes = useStyles();

  return (
    <PageLayout>
      <div className={classes.root}>
        <Typography variant="h1" color="error">
          404
        </Typography>
        <Typography variant="h5">Oops! Page not found</Typography>
        <p>Sorry, but the page you are looking for is not found.</p>
      </div>
    </PageLayout>
  );
}

export default NotFoundPage;
