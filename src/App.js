import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Box } from "@material-ui/core";
import { login } from "./core/redux/auth/authActions";
import AppRoutes from "./App.routes";

const mapDispatchToProps = {
  login,
};

const enhance = connect(null, mapDispatchToProps);

const App = ({ login }) => {
  useEffect(() => {
    login();
  }, [login]);

  return (
    <Router>
      <Box minHeight="100vh" display="flex" flexDirection="column">
        <AppRoutes />
      </Box>
    </Router>
  );
};

export default enhance(App);
