import createDataContext from "../context/createDataContext";

const locationReducer = (state, action) => {
  switch (action.type) {
    case "add_location":
      return { ...state, locations: [...state.locations, action.payload] };
    case "add_current_location":
      return { ...state, currentLocation: action.payload };
    case "start_recording":
      return { ...state, isRecording: true };
    case "stop_recording":
      return { ...state, isRecording: false };
    case "change_name":
      return { ...state, name: action.payload };
    case "reset":
      return { ...state, locations: [], name: "" };
    default:
      return state;
  }
};

const changeName = (dispatch) => {
  return (name) => {
    dispatch({ type: "change_name", payload: name });
  };
};

const reset = (dispatch) => {
  return () => {
    dispatch({ type: "reset" });
  };
};

const addLocation = (dispatch) => {
  return (location, isRecording) => {
    dispatch({ type: "add_current_location", payload: location });
    if (isRecording) {
      dispatch({ type: "add_location", payload: location });
    }
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
    reset,
    startRecording,
    stopRecording,
    changeName,
  },
  {
    locations: [],
    isRecording: false,
    currentLocation: null,
    name: "",
  }
);
