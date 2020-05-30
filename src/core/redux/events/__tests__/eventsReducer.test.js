import eventReducer, { initialState } from "../eventsReducer";
import * as eventsAction from "../eventsAction";

const testState = {
  allEvents: [],
  event: {
    id: "1",
    userId: "2",
    title: "title",
    description: "description",
    type: "type",
    place: "place",
    image: "",
    commentList: [],
  },
  usersDataComments: [],
};

it("should return the initial state", () => {
  expect(eventReducer(undefined, {})).toEqual({
    ...initialState,
  });
});

it("should get events", () => {
  expect(eventReducer(initialState, eventsAction.getEvents())).toEqual({
    ...initialState,
  });
});

it("should return event by type", () => {
  expect(eventReducer(testState, eventsAction.getEventByType("type"))).toEqual({
    ...testState,
  });
});

it("should return event by id", () => {
  expect(eventReducer(testState, eventsAction.getEventById("type"))).toEqual({
    ...testState,
  });
});
