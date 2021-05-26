import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import AuthForm from "./../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context as AuthContext } from "./../context/AuthContext";
import { NavigationEvents } from "react-navigation";

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText="Sign In"
        onSubmit={signin}
        submitButtonText="Sign In"
        errorMessage={state.errorMessage}
      />
      <NavLink
        linkText="Don't have an account yet? Sign-Up instead."
        targetScreen="Signup"
      />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
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

export default SigninScreen;
