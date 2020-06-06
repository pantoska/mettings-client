import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Box } from "@material-ui/core";
import { checkAuth } from "./core/redux/auth/userActions";
import AppRoutes from "./App.routes";
import { ToastContainer } from "react-toastify";

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
      <ToastContainer autoClose={3000} pauseOnHover={false} />
    </Router>
  );
};

export default enhance(App);
