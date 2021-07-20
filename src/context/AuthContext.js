import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload, token: "" };
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return ({ email, password }, callback) => {
    trackerApi
      .post("/signup", { email, password })
      .then((response) => console.log(response.data))
      .catch((err) => {
        dispatch({
          type: "add_error",
          payload: "Something went wrong with sign up",
        });
      });

    // make api request to sign up with that email and password
    // if we sign up, modify our state, and say that we are authenticated
    // if signing up fails, we probably need to reflect an error message
    // somewhere
  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {
    // Try to signin
    // Handle success by updating state
    // Handle failure by showing error message (somehow)
  };
};

const signout = (dispatch) => {
  return () => {
    // somehow sign out!!!
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { token: "", errorMessage: "" }
);
