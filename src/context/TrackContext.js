import createDataContext from "./createDataContext";

const trackReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
const fetchTracks = (dispatch) => {};

const createTrack = (dispatch) => {
  return (name, locations) => {};
};

export const { Context, Provider } = createDataContext(
  trackReducer,
  { createTrack, fetchTracks },
  []
);
