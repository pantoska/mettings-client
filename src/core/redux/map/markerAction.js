import { createAsyncThunk } from "@reduxjs/toolkit";
import MapApi from "../../http/MapApi";

const scope = "core/map";

export const createMarker = createAsyncThunk(
  `${scope}/REQUEST_CREATE_MARKER`,
  async (requestDto) => {
    const response = await MapApi.createMarker(requestDto);
    return {
      marker: response.data,
    };
  }
);

export const getMarkers = createAsyncThunk(
  `${scope}/REQUEST_GET_ALL_MARKERS`,
  async () => {
    const response = await MapApi.getMarkers();
    return {
      allMarkers: response.data,
    };
  }
);
