import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import EventsApi from "../../http/EventsApi";
import UserApi from "../../http/UserApi";

const scope = "core/events";

const userResponse = async (id) => {
  const response = await UserApi.getUserById(id);
  return response;
};

export const getEventById = createAsyncThunk(
  `${scope}/REQUEST_GET_EVENT`,
  async (id) => {
    const response = await EventsApi.getEvent(id);
    const unresolvedPromises = response.data.commentList.map((el) =>
      userResponse(el.userId)
    );
    const results = await Promise.all(unresolvedPromises);

    return {
      event: response.data,
      usersDataComments: results,
      // userInfo: usersInfo.data,
    };
  }
);

export const getEventByType = createAction(
  `${scope}/REQUEST_GET_EVENT_BY_TITLE`,
  (type) => {
    return {
      payload: {
        eventType: type,
      },
    };
  }
);

export const getEvents = createAsyncThunk(
  `${scope}/REQUEST_GET_ALL_EVENTS`,
  async () => {
    const response = await EventsApi.getAllEvents();
    return {
      allEvents: response.data,
    };
  }
);

export const createEvent = createAsyncThunk(
  `${scope}/REQUEST_CREATE_EVENT`,
  async (requestDto) => {
    const response = await EventsApi.createEvent(requestDto);
    return {
      event: response.data,
    };
  }
);

export const createComment = createAsyncThunk(
  `${scope}/REQUEST_CREATE_COMMENT`,
  async (requestDto) => {
    const response = await EventsApi.createComment(requestDto.id, requestDto);
    return {
      comments: response.data,
    };
  }
);

export const updateEvent = createAsyncThunk(
  `${scope}/REQUEST_UPDATE_EVENT`,
  async (requestDto) => {
    const response = await EventsApi.updateEvent(requestDto.id, requestDto);
    return {
      event: response.data,
    };
  }
);

export const deleteEvent = createAsyncThunk(
  `${scope}/REQUEST_DELETE_EVENT`,
  async (id) => {
    const response = await EventsApi.deleteEvent(id);
    return {
      eventId: id,
      info: response.data,
    };
  }
);
