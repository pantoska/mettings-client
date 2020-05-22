import request from "./request";

export default {
  createEvent(requestDto) {
    return request.post("http://localhost:8080/api/events", requestDto);
  },

  createComment(id, requestDto) {
    return request.post(
      `http://localhost:8080/api/events/${id}/comments`,
      requestDto
    );
  },

  updateEvent(requestDto) {
    return request.put("http://localhost:8080/api/events", requestDto);
  },

  getAllEvents() {
    return request.get("http://localhost:8080/api/events");
  },

  getEvent(id) {
    return request.get(`http://localhost:8080/api/events/${id}`);
  },

  deleteEvent(id) {
    return request.delete(`http://localhost:8080/api/events/${id}`);
  },
};
