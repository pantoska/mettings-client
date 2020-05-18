import React from "react";
import { makeStyles } from "@material-ui/core";

import Image from "../../utils/images/second-background.png";
import PageLayout from "../../layout/PageLayout";
import RegisterForm from "./RegisterForm";

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
    name: "RegisterPage",
  }
);

const RegisterPage = (props) => {
  const classes = useStyles();

  return (
    <PageLayout>
      <div className={classes.root}>
        <div className={classes.form}>
          <RegisterForm />
        </div>
      </div>
    </PageLayout>
  );
};

export default RegisterPage;
