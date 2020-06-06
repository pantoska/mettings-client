import userReducer, { initialState } from "../userReducer";
import * as userActions from "../userActions";

it("should return the initial state", () => {
  expect(userReducer(undefined, {})).toEqual({
    ...initialState,
  });
});

it("should handle login.fulfilled", () => {
  const result = userReducer(initialState, userActions.login.fulfilled());
  expect(result).toEqual({ ...initialState, isAuth: true });
});

it("should handle login.rejected", () => {
  const result = userReducer(initialState, userActions.login.rejected());
  expect(result).toEqual({ ...initialState, error: "Wrong email or password" });
});

it("should handle register.rejected", () => {
  const result = userReducer(initialState, userActions.register.rejected());
  expect(result).toEqual({
    ...initialState,
    error: "Email is already registered or weak password",
  });
});

it("should handle logout", () => {
  const result = userReducer(initialState, userActions.logout());
  expect(result).toEqual({
    ...initialState,
    isAdmin: false,
    isAuth: false,
    info: "User successfully logout",
  });
});
