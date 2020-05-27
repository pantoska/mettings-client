import { createAsyncThunk } from "@reduxjs/toolkit";
import UserApi from "../../http/UserApi";

const scope = "core/auth";

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
    console.log(response);
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
      name: response.data["firstName"],
      surname: response.data["lastName"],
    };
  }
);
