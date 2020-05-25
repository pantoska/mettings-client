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
