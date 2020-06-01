import axios from "axios";

const defaultOptions = {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

const request = axios.create(defaultOptions);

export default request;
