import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import AuthApi from "../../http/AuthApi";

const scope = "core/auth";

export const login = createAsyncThunk(
  `${scope}/REQUEST_LOGIN`,
  async (requestDto) => {
    let response = await AuthApi.loginUser(requestDto);
    localStorage.setItem("expiryDate", response.data["expiryDate"]);

    return {
      open: response != null,
      error: response.data,
    };
  }
);

export const register = createAsyncThunk(
  `${scope}/REQUEST_REGISTER`,
  async (requestDto) => {
    const response = await AuthApi.registerUser(requestDto);

    return {
      isRegistered: response.data["message"],
    };
  }
);

export const logout = createAction(`${scope}/REQUEST_LOGOUT`, async () => {
  await AuthApi.logoutUser();
  localStorage.removeItem("isAdmin");
  localStorage.removeItem("expiryDate");
  return {
    open: false,
  };
});
