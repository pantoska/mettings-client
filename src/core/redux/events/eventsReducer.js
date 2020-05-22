import { createReducer } from "@reduxjs/toolkit";
import {
  getEvents,
  getEventById,
  createEvent,
  createComment,
  updateEvent,
  deleteEvent,
} from "./eventsAction";

const initialState = {
  allEvents: [],
  createdEvent: null,
};

const eventsReducer = createReducer(initialState, {
  [getEvents.fulfilled]: (state, action) => {
    return {
      ...state,
      allEvents: [...action.payload.allEvents],
    };
  },

  [createEvent.fulfilled]: (state, action) => {
    return {
      ...state,
      createdEvent: action.payload.event,
    };
  },
});

export default eventsReducer;
