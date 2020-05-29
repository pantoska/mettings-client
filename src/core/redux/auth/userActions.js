import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import UserApi from "../../http/UserApi";
import AuthApi from "../../http/AuthApi";

const scope = "core/auth";

export const login = createAsyncThunk(
  `${scope}/REQUEST_LOGIN`,
  async (requestDto) => {
    let response = await AuthApi.loginUser(requestDto);
    localStorage.setItem("expiryDate", response.data["expiryDate"]);
    return {};
  }
);

export const register = createAsyncThunk(
  `${scope}/REQUEST_REGISTER`,
  async (requestDto) => {
    await AuthApi.registerUser(requestDto);
    return {};
  }
);

export const logout = createAction(`${scope}/REQUEST_LOGOUT`, async () => {
  await AuthApi.logoutUser();
  localStorage.removeItem("isAdmin");
  localStorage.removeItem("expiryDate");
  return {};
});

export const checkAuth = createAsyncThunk(`${scope}/REQUEST_AUTH`, async () => {
  const response = await UserApi.checkUser();
  return {
    isAuth: response != null,
    role: response.data["roles"][0],
  };
});

export const getAllUsers = createAsyncThunk(
  `${scope}/REQUEST_GET_USERS`,
  async () => {
    const response = await UserApi.getAllUsers();
    return {
      users: response.data,
    };
  }
);

export const deleteUser = createAsyncThunk(
  `${scope}/REQUEST_DELETE_USER`,
  async (id) => {
    await UserApi.deleteUser(id);
    return {
      userId: id,
    };
  }
);

export const getUserById = createAsyncThunk(
  `${scope}/REQUEST_GET_USER`,
  async (id) => {
    const response = await UserApi.getUserById(id);

    return {
      name: response.data["firstName"],
      surname: response.data["lastName"],
    };
  }
);

export const checkUserInfo = createAsyncThunk(
  `${scope}/REQUEST_USER_INFO`,
  async () => {
    const response = await UserApi.getInfoUser();
    return {
      id: response.data["id"],
      name: response.data["firstName"],
      surname: response.data["lastName"],
    };
  }
);
