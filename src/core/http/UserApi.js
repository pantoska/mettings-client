import request from "./request";

export default {
  checkUser() {
    return request.get("http://localhost:8080/api/user/check");
  },

  getUserById(id) {
    return request.get(`http://localhost:8080/api/user/${id}`);
  },

  getInfoUser() {
    return request.get("http://localhost:8080/api/user/me");
  },
};
