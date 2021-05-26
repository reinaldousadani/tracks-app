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
    case "SIGNIN":
      return { errorMessage: "", token: action.payload };
    case "SIGNOUT":
      return { token: null, errorMessage: "" };
    case "CLEAR_ERROR_MESSAGE":
      return { ...state, errorMessage: "" };
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => {
  return async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      dispatch({ type: "SIGNIN", payload: token });
      navigate("TrackList");
    } else {
      navigate("loginFlow");
    }
  };
};

const clearErrorMessage = (dispatch) => {
  return () => {
    dispatch({ type: "CLEAR_ERROR_MESSAGE" });
  };
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
      dispatch({
        type: "ADD_ERROR",
        payload: "Something went wrong with the Sign-Up process.",
      });
    }
  };
};

const signin = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signin", {
        email: email,
        password: password,
      });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "SIGNIN", payload: response.data.token });
      navigate("TrackList");
    } catch (err) {
      dispatch({
        type: "ADD_ERROR",
        payload: "Something went wrong with the Sign-in",
      });
    }
  };
};

const signout = (dispatch) => {
  return async () => {
    await AsyncStorage.removeItem("token");
    dispatch({ type: "SIGNOUT" });
    navigate("loginFlow");
  };
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: "" }
);
