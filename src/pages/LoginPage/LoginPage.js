import React from "react";
import LoginForm from "./LoginForm";
import Navbar from "../../components/Navbar";
import { makeStyles } from "@material-ui/core";

import Image from "../../utils/images/second-background.png";
import PageLayout from "../../layout/PageLayout";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundImage: `url(${Image})`,
      backgroundSize: "cover",
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
    <PageLayout>
      <div className={classes.root}>
        <div className={classes.form}>
          <LoginForm />
        </div>
      </div>
    </PageLayout>
  );
};

export default LoginPage;
