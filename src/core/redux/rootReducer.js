import { combineReducers } from "redux";
import userReducer from "./auth/userReducer";
import eventsReducer from "./events/eventsReducer";
import markerReducer from "./map/markerReducer";

const rootReducer = combineReducers({
  user: userReducer,
  events: eventsReducer,
  markers: markerReducer,
});

export default rootReducer;
