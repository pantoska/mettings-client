import { createReducer } from "@reduxjs/toolkit";
import {
  checkAuth,
  checkUserInfo,
  getUserById,
  getAllUsers,
  deleteUser,
} from "./userActions";

const initialState = {
  isAuth: false,
  isAdmin: false,
  users: [],
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

  [getAllUsers.fulfilled]: (state, action) => {
    return {
      ...state,
      users: [...action.payload.users],
    };
  },

  [deleteUser.fulfilled]: (state, action) => {
    return {
      ...state,
      users: state.users.filter((user) => user.id !== action.payload.userId),
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
