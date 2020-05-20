import request from "./request";

export default {
  checkUser() {
    return request.get("http://localhost:8080/api/user/check");
  },

  getInfoUser() {
    return request.get("http://localhost:8080/api/user/me");
  },
};
