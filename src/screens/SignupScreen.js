import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "./../components/NavLink";
import { NavigationEvents } from "react-navigation";

const SignupScreen = () => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText="Sign Up"
        onSubmit={signup}
        submitButtonText="Sign Up"
        errorMessage={state.errorMessage}
      />
      <NavLink
        linkText="Already have an account? Sign-In instead."
        targetScreen="Signin"
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 150,
  },
});

export default SignupScreen;
