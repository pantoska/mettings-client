import { combineReducers } from "redux";
import loginReducer from "./auth/authReducer";
import authReducer from "./auth/checkAuthReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  auth: authReducer,
});

export default rootReducer;
