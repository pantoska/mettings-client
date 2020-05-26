import { createReducer } from "@reduxjs/toolkit";
import { createMarker, getMarkers } from "./markerAction";

const initialState = {
  marker: "",
  allMarkers: [],
};

const markerReducer = createReducer(initialState, {
  [createMarker.fulfilled]: (state, action) => {
    return {
      ...state,
      marker: action.payload.marker,
    };
  },

  [getMarkers.fulfilled]: (state, action) => {
    return {
      ...state,
      allMarkers: [...action.payload.allMarkers],
    };
  },
});

export default markerReducer;
