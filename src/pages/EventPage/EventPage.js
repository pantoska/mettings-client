import React from "react";
import { makeStyles } from "@material-ui/core";
import PageLayout from "../../layout/PageLayout";
import Event from "../../containers/EventsDashboard/Event/Event";

import { compose } from "recompose";
import { connect } from "react-redux";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      flexGrow: 1,
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    },
  }),
  {
    name: "EventPage",
  }
);

const mapStateToProps = (state) => ({
  isAdmin: state.user.isAdmin,
});

const enhance = compose(connect(mapStateToProps, null));

const EventPage = ({ isAdmin, props }) => {
  const classes = useStyles();

  return (
    <PageLayout>
      <div className={classes.root}>
        <Event {...props} />
      </div>
    </PageLayout>
  );
};

export default enhance(EventPage);
