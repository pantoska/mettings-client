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

request.interceptors.response.use(
  (response) => response,
  (error) => {
    let customError;
    if (error.response) {
      customError = {
        type: "response",
        message: error.response.data,
        status: error.response.status,
      };
    } else if (error.request) {
      customError = {
        type: "request",
        message: "No response was received",
      };
    } else {
      customError = {
        type: "unknown",
        message: "Problem with setting request",
      };
    }
    return Promise.reject(customError);
  }
);

export default request;
