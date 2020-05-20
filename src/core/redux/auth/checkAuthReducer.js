import { createReducer } from "@reduxjs/toolkit";
import { checkAuth, checkUserInfo } from "./checkAuthActions";

const initialState = {
  isAuth: false,
  isAdmin: false,
  name: null,
  surname: null,
};

const authReducer = createReducer(initialState, {
  [checkAuth.fulfilled]: (state, action) => {
    return {
      ...state,
      isAuth: action.payload.isAuth,
      isAdmin: action.payload.role === "ROLE_ADMIN",
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
