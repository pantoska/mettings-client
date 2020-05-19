import request from "./request";

export default {
  registerUser(requestDto) {
    return request.post("http://localhost:8080/api/auth/register", requestDto);
  },

  authenticateUser(requestDto) {
    return request.post("http://localhost:8080/api/auth/login", requestDto);
  },

  logoutUser() {
    return request.post("http://localhost:8080/api/auth/logout");
  },
};
