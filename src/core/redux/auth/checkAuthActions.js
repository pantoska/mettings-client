import { createAsyncThunk } from "@reduxjs/toolkit";
import CheckAuthApi from "../../http/CheckAuthApi";

const scope = "core/auth";

export const checkAuth = createAsyncThunk(`${scope}/REQUEST_AUTH`, async () => {
  const response = await CheckAuthApi.checkUser();

  return {
    isAuth: response != null,
    role: response.data["roles"][0],
  };
});

export const checkUserInfo = createAsyncThunk(
  `${scope}/REQUEST_USER_INFO`,
  async () => {
    const response = await CheckAuthApi.checkUserInfo();

    return {
      name: response.data["firstName"],
      surname: response.data["lastName"],
    };
  }
);
