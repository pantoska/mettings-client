import { createReducer } from "@reduxjs/toolkit";
import { login, logout } from "./loginActions";

const initialState = {
  isAdmin: false,
  open: false,
};

const loginReducer = createReducer(initialState, {
  [login.fulfilled]: (state, action) => {
    state.isAdmin = action.payload.isAdmin;
    state.open = true;
  },

  [logout]: (state, action) => {
    state.isAdmin = action.payload;
    state.open = false;
  },
});

export default loginReducer;
