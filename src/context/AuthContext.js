import AsyncStorage from "@react-native-async-storage/async-storage";

import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "clear_error":
      return { ...state, errorMessage: "" };
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signup":
    case "signin":
      return { ...state, errorMessage: "", token: action.payload };
    default:
      return state;
  }
};

const clearErrorMessage = (dispatch) => {
  return () => {
    dispatch({ type: "clear_error" });
  };
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      const token = response.data.token;

      await AsyncStorage.setItem("token", token);
      dispatch({ type: "signup", payload: token });

      navigate("TrackList");
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign up",
      });
    }
  };
};

const signin = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signin", { email, password });
      const token = response.data.token;

      await AsyncStorage.setItem("token", token);
      dispatch({ type: "signin", payload: token });

      navigate("TrackList");
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign in",
      });
    }
  };
};

const signout = (dispatch) => {
  return () => {
    // somehow sign out!!!
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage },
  { token: null, errorMessage: "" }
);
