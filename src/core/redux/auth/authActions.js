import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import AuthApi from "../../http/AuthApi";

const scope = "core/auth";

export const login = createAsyncThunk(
  `${scope}/REQUEST_LOGIN`,
  async (requestDto) => {
    const response = await AuthApi.authenticateUser(requestDto);
    localStorage.setItem("expiryDate", response.data["expiryDate"]);
    const role = response.data["authorities"];

    return {
      isAdmin: role[0].authority === "ROLE_ADMIN",
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
    isAdmin: false,
  };
});
