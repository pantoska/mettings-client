import React from "react";
import LoginForm from "./LoginForm";
import Navbar from "../../components/Navbar";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    form: {
      margin: "40px",
    },
  }),
  {
    name: "LoginPage",
  }
);

const LoginPage = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />
      <div className={classes.form}>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
