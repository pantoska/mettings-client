import { createAsyncThunk } from "@reduxjs/toolkit";
import EventsApi from "../../http/EventsApi";

const scope = "core/events";

export const getEventById = createAsyncThunk(
  `${scope}/REQUEST_GET_EVENT`,
  async (id) => {
    const response = await EventsApi.getEvent(id);
    return {
      event: response.data,
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
    const response = await EventsApi.updateEvent(requestDto);
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
      info: response.data,
    };
  }
);
