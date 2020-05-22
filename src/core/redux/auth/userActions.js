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

export const checkUserInfo = createAsyncThunk(
  `${scope}/REQUEST_USER_INFO`,
  async () => {
    const response = await UserApi.checkUserInfo();

    return {
      name: response.data["firstName"],
      surname: response.data["lastName"],
    };
  }
);
