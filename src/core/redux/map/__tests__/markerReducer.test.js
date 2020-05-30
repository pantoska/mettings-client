import markerReducer, { initialState } from "../markerReducer";
import * as markerAction from "../markerAction";

it("should return the initial state", () => {
  expect(markerReducer(undefined, {})).toEqual({
    ...initialState,
  });
});
