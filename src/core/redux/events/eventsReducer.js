import { createReducer } from "@reduxjs/toolkit";
import {
  getEvents,
  getEventById,
  createEvent,
  createComment,
  getEventByType,
  // updateEvent,
  deleteEvent,
} from "./eventsAction";

export const initialState = {
  allEvents: [],
  event: {
    id: "",
    userId: "",
    title: "",
    description: "",
    type: "",
    place: "",
    image: "",
    commentList: [],
  },
  usersDataComments: [],
};

const eventsReducer = createReducer(initialState, {
  [getEventById.fulfilled]: (state, action) => {
    return {
      ...state,
      event: action.payload.event,
      usersDataComments: action.payload.usersDataComments,
      allEvents: [...state.allEvents],
    };
  },

  [getEventByType]: (state, action) => {
    return {
      ...state,
      allEvents: state.allEvents.filter((event) =>
        event.type.includes(action.payload.eventType)
      ),
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
    };
  },

  [createComment.fulfilled]: (state, action) => {
    return {
      ...state,
      event: {
        ...state.event,
        commentList: [...state.event.commentList, action.payload.comments],
      },
    };
  },
});

export default eventsReducer;
