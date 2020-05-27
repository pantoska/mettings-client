import React from "react";
import { makeStyles } from "@material-ui/core";

import PageLayout from "../../layout/PageLayout";
import AdminPanel from "../../containers/AdminPanel/AdminPanel";

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
    name: "AdminPage",
  }
);

const AdminPage = (props) => {
  const classes = useStyles();

  return (
    <PageLayout>
      <div className={classes.root}>
        <AdminPanel />
      </div>
    </PageLayout>
  );
};

export default AdminPage;
