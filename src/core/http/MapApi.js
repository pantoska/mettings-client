import request from "./request";

export default {
  searchPlace(searchText) {
    const coordinates = "49,54;14,28";
    return request.get(
      `https://geocoder.cit.api.here.com/6.2/geocode.json?searchtext=${searchText}&app_id=${process.env.REACT_APP_HEREMAPS_API_KEY}&app_code=${process.env.REACT_APP_HEREMAPS_API_CODE}&mapview=${coordinates}`
    );
  },

  createMarker(requestDto) {
    return request.post(`http://localhost:8080/api/markers`, requestDto);
  },

  getMarkers() {
    return request.get(`http://localhost:8080/api/markers`);
  },
};
