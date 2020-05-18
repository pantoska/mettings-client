import React, { useState, useCallback } from "react";

import {
  TextField,
  makeStyles,
  Button,
  Paper,
  Typography,
} from "@material-ui/core";
import { connect } from "react-redux";
import { login } from "../../../core/redux/login/loginActions";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      minWidth: "400px",
      maxWidth: "80%",
      padding: theme.spacing(4, 3),
      display: "flex",
      flexDirection: "column",
    },
    submitButton: {
      marginTop: theme.spacing(2),
    },
  }),
  {
    name: "LoginForm",
  }
);

const mapStateToProps = (state) => ({
  isOpen: state.login.open,
});

const mapDispatchToProps = {
  login,
};

const LoginForm = ({ login, isOpen }) => {
  const [credentials, setCredentials] = useState({
    login: "",
    password: "",
  });
  const classes = useStyles();

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      login(credentials);
    },
    [credentials, login]
  );

  return (
    <Paper component="form" className={classes.root} onSubmit={handleSubmit}>
      <Typography>Login Panel</Typography>
      <TextField
        label="Login"
        value={credentials.login}
        name="login"
        onChange={handleChange}
        variant="outlined"
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        value={credentials.password}
        name="password"
        onChange={handleChange}
        variant="outlined"
        margin="normal"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.submitButton}
      >
        Submit
      </Button>
    </Paper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
