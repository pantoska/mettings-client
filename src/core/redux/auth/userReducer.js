import { createReducer } from "@reduxjs/toolkit";
import { login, logout, register } from "./userActions";
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
  [login.fulfilled]: (state, action) => {
    return {
      ...state,
      isAuth: true,
    };
  },

  [register.fulfilled]: (state, action) => {
    return {
      ...state,
      isAuth: true,
    };
  },

  [logout]: (state, action) => {
    return {
      ...state,
      isAdmin: false,
      isAuth: false,
    };
  },
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
      id: action.payload.id,
      name: action.payload.name,
      surname: action.payload.surname,
    };
  },
});

export default authReducer;
