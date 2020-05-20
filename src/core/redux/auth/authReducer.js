import { createReducer } from "@reduxjs/toolkit";
import { login, logout, register } from "./authActions";

const initialState = {
  open: false,
  error: null,
  isRegister: null,
};

const loginReducer = createReducer(initialState, {
  [login.fulfilled]: (state, action) => {
    return {
      ...state,
      error: null,
      open: true,
    };
  },

  [login.rejected]: (state, action) => {
    return {
      ...state,
      error: action.payload.error,
      open: false,
    };
  },

  [register.fulfilled]: (state, action) => {
    return {
      ...state,
      isRegister: action.payload.isRegistered,
    };
  },

  [logout]: (state, action) => {
    return {
      ...state,
      open: false,
    };
  },
});

export default loginReducer;
