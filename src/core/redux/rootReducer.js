import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import userReducer from "./auth/userReducer";
import eventsReducer from "./events/eventsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  events: eventsReducer,
});

export default rootReducer;
