import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
// import AuthApi from "../../http/AuthApi";

const scope = "core/login";

export const login = createAsyncThunk(
  `${scope}/REQUEST_LOGIN`,
  async (credentials) => {
    let isLoggedIn = localStorage.getItem("auth");
    let base64Credentials;
    let isAdmin;
    if (!isLoggedIn) {
      base64Credentials = btoa(credentials.login + ":" + credentials.password);
      isAdmin = credentials.login === "admin";
    } else {
      base64Credentials = isLoggedIn;
      isAdmin = localStorage.getItem("isAdmin") === true.toString();
    }
    // await AuthApi.login(base64Credentials);
    localStorage.setItem("auth", base64Credentials);
    localStorage.setItem("isAdmin", isAdmin);
    return { isAdmin };
  }
);

export const logout = createAction(`${scope}/REQUEST_LOGOUT`, () => {
  localStorage.removeItem("auth");
  return { payload: false };
});
