import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../components/Navbar";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#EEE2DC",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  appMain: {
    width: "100%",
    flexGrow: "1",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  appFooter: {
    backgroundColor: "#544e51",
    color: "#EEE2DC",
    textTransform: "uppercase",
    "& > h5": {
      padding: "2px 0",
      letterSpacing: "3px",
      textAlign: "center",
    },
  },
}));

function PageLayout({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />
      <main className={classes.appMain}>{children}</main>
      <footer className={classes.appFooter}>
        <h5>Patrycja Zań</h5>
      </footer>
    </div>
  );
}

export default PageLayout;
