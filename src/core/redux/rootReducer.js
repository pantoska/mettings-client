import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";

const rootReducer = combineReducers({
  login: authReducer,
});

export default rootReducer;
