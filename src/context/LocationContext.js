import createDataContext from "../context/createDataContext";

const locationReducer = (state, action) => {
  switch (action.type) {
    case "add_location":
      return { ...state, locations: [...state.locations, action.payload] };
    case "clear_locations":
      return { ...state, locations: [] };
    case "start_recording":
      return { ...state, isRecording: true };
    case "stop_recording":
      return { ...state, isRecording: false };
    default:
      return state;
  }
};

const clearLocations = (dispatch) => {
  return () => {
    dispatch({ type: "clear_locations" });
  };
};

const addLocation = (dispatch) => {
  return (location) => {
    dispatch({ type: "add_location", payload: location });
  };
};

const startRecording = (dispatch) => {
  return () => dispatch({ type: "start_recording" });
};

const stopRecording = (dispatch) => {
  return () => dispatch({ type: "stop_recording" });
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  {
    addLocation,
    clearLocations,
    startRecording,
    stopRecording,
  },
  {
    locations: [],
    isRecording: false,
    currentLocation: null,
  }
);
