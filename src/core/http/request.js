import axios from "axios";

export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const defaultOptions = {
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

const request = axios.create(defaultOptions);

export default request;
