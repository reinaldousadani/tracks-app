import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const trackReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const fetchTracks = (dispatch) => {
  return () => {};
};

const createTrack = (dispatch) => {
  return async (name, locations) => {
    await trackerApi.post("/tracks", { name: name, locations: locations });
  };
};

export const { Context, Provider } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);
