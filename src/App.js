import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Box } from "@material-ui/core";
import { checkAuth } from "./core/redux/auth/checkAuthActions";
import AppRoutes from "./App.routes";

const mapDispatchToProps = {
  checkAuth,
};

const enhance = connect(null, mapDispatchToProps);

const App = ({ checkAuth }) => {
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <Router>
      <Box minHeight="100vh" display="flex" flexDirection="column">
        <AppRoutes />
      </Box>
    </Router>
  );
};

export default enhance(App);
