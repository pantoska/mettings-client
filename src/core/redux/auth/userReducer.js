import { createReducer } from "@reduxjs/toolkit";
import { checkAuth, checkUserInfo, getUserById } from "./userActions";

const initialState = {
  isAuth: false,
  isAdmin: false,
  name: "",
  surname: "",
};

const authReducer = createReducer(initialState, {
  [checkAuth.fulfilled]: (state, action) => {
    return {
      ...state,
      isAuth: action.payload.isAuth,
      isAdmin: action.payload.role === "ROLE_ADMIN",
    };
  },

  [getUserById.fulfilled]: (state, action) => {
    return {
      ...state,
      name: action.payload.name,
      surname: action.payload.surname,
    };
  },

  [checkUserInfo.fulfilled]: (state, action) => {
    return {
      ...state,
      name: action.payload.name,
      surname: action.payload.surname,
    };
  },
});

export default authReducer;
