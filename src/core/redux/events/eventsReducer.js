import { createReducer } from "@reduxjs/toolkit";
import {
  getEvents,
  getEventById,
  createEvent,
  createComment,
  // updateEvent,
  deleteEvent,
} from "./eventsAction";

const initialState = {
  allEvents: [],
  event: {
    commentList: [],
  },
  createdEvent: null,
  comments: [],
};

const eventsReducer = createReducer(initialState, {
  [getEventById.fulfilled]: (state, action) => {
    return {
      ...state,
      event: action.payload.event,
      allEvents: [...state.allEvents],
    };
  },

  [getEvents.fulfilled]: (state, action) => {
    return {
      ...state,
      allEvents: [...action.payload.allEvents],
    };
  },

  [createEvent.fulfilled]: (state, action) => {
    return {
      ...state,
      allEvents: [...state.allEvents, action.payload.event],
    };
  },

  [deleteEvent.fulfilled]: (state, action) => {
    return {
      ...state,
      allEvents: state.allEvents.filter(
        (event) => event.id !== action.payload.eventId
      ),
      // allEvents: [...state.allEvents, action.payload.event],
    };
  },

  [createComment.fulfilled]: (state, action) => {
    return {
      ...state,
      comments: [...state.comments, action.payload.comments],
      allEvents: [...state.allEvents, action.payload.event],
    };
  },
});

export default eventsReducer;
