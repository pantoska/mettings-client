import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import userReducer from "./auth/userReducer";
import eventsReducer from "./events/eventsReducer";
import markerReducer from "./map/markerReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  events: eventsReducer,
  markers: markerReducer,
});

export default rootReducer;
