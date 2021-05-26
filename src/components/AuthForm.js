import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Spacer from "./Spacer";
import { Button, Text, Input } from "react-native-elements";

const AuthForm = ({ headerText, onSubmit, submitButtonText, errorMessage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Spacer>
        <Text h2>{headerText} for Tracker</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={(newEmail) => setEmail(newEmail)}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        label="Password"
        value={password}
        onChangeText={(newPassword) => setPassword(newPassword)}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
      />
      {errorMessage !== "" ? (
        <Text style={styles.error}>{errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          title={submitButtonText}
          onPress={() => onSubmit({ email: email, password: password })}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  error: {
    fontSize: 16,
    marginHorizontal: 15,
    marginTop: 15,
    color: "red",
  },
});

export default AuthForm;
