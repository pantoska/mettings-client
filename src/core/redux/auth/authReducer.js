import { createReducer } from "@reduxjs/toolkit";
import { login, logout, register } from "./authActions";

const initialState = {
  isAdmin: false,
  isRegister: "",
  open: false,
};

const loginReducer = createReducer(initialState, {
  [login.fulfilled]: (state, action) => {
    return {
      ...state,
      isAdmin: action.payload.isAdmin,
      open: true,
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
      isAdmin: false,
      open: false,
    };
  },
});

export default loginReducer;
