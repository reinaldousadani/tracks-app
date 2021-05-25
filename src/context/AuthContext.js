import createDataContext from "./createDataContext";
import trackerApi from "./../api/tracker";

const authReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ERROR":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", {
        email: email,
        password: password,
      });
      console.log(response.data);
    } catch (err) {
      dispatch({
        type: "ADD_ERROR",
        payload: "Something went wrong with the Sign-Up process.",
      });
    }
  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {
    // try to signin with the given email and password
    // update state
    // show error message somehow
    dispatch();
  };
};

const signout = (dispatch) => {
  return () => {
    // somehow sign out
    dispatch();
  };
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { isSignedIn: false, errorMessage: "" }
);
