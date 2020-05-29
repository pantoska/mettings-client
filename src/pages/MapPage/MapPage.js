import React from "react";
import { makeStyles } from "@material-ui/core";
import PageLayout from "../../layout/PageLayout";

import { compose } from "recompose";
import { connect } from "react-redux";
import Map from "../../containers/Map/Map";

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
    name: "MapPage",
  }
);

const mapStateToProps = (state) => ({
  isAdmin: state.user.isAdmin,
});

const enhance = compose(connect(mapStateToProps, null));

const MapPage = ({ isAdmin }) => {
  const classes = useStyles();

  return (
    <PageLayout>
      <div className={classes.root}>
        <Map />
      </div>
    </PageLayout>
  );
};

export default enhance(MapPage);
