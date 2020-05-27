import React, { useState, useCallback } from "react";
import debounce from "lodash.debounce";

import {
  TextField,
  makeStyles,
  Button,
  Paper,
  Typography,
} from "@material-ui/core";
import { connect } from "react-redux";
import { createEvent } from "../../../core/redux/events/eventsAction";
import { divIcon } from "leaflet";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      minWidth: "350px",
      maxWidth: "70%",
      padding: theme.spacing(3, 3),
      display: "flex",
      flexDirection: "column",
      backgroundColor: "rgba(255,255,255,0.3)",
    },
    submitButton: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      backgroundColor: "#AC3B61",
      color: "#EEE2DC",
      "&:hover": {
        color: "#000000",
        backgroundColor: "BAB2B5",
      },
    },
    register: {
      color: "#AC3B61",
      fontSize: "13px",
    },
  }),
  {
    name: "RegisterForm",
  }
);

const mapStateToProps = (state) => ({
  isOpen: state.auth.open,
});

const mapDispatchToProps = {
  createEvent,
};

const MapForm = ({ createEvent, isOpen }) => {
  const [marker, setMarker] = useState({
    currentPlace: "",
    value: "",
    getFinalState: [],
    sendPropsToMap: "",
    showMarker: false,
    showButton: false,
    redirect: false,
  });

  const classes = useStyles();

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setMarker(
      (prev) => ({
        ...prev,
        [name]: value,
      }),
      () => {
        if (value && value.length > 1) {
          debounce(this.getInfo, 5000);
        }
      }
    );
  }, []);

  // const handleSubmit = useCallback(
  //   (event) => {
  //     event.preventDefault();
  //     createEvent(metting);
  //   },
  //   [metting, createEvent]
  // );

  return <div></div>;
};

export default connect(mapStateToProps, mapDispatchToProps)(MapForm);
