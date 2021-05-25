import createDataContext from "./createDataContext";
import trackerApi from "./../api/tracker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ERROR":
      return { ...state, errorMessage: action.payload };
    case "SIGNUP":
      return { errorMessage: "", token: action.payload };
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
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "SIGNUP", payload: response.data.token });
      navigate("TrackList");
    } catch (err) {
      console.log(err.message);
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
  { token: null, errorMessage: "" }
);
