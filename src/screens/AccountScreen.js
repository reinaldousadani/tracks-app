import React, { useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";
import { Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { View, Text, StyleSheet } from "react-native";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <>
      <Text style={{ fontSize: 48 }}>AccountScreen</Text>
      <Spacer>
        <Button title="SignOut" onPress={signout} />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
