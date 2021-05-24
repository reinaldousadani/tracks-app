import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return ({ email, password }) => {
    // try to signup with the given email and password
    // update state
    // show error message if error
    dispatch();
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
  {},
  { isSignedIn: false }
);
