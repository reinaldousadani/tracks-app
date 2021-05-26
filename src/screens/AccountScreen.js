import React, { useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";
import { Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { View, Text, StyleSheet, Platform } from "react-native";
import { SafeAreaView } from "react-navigation";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView
      forceInset={{ top: "always" }}
      style={{ paddingTop: Platform.OS === "android" ? 25 : 0 }}
    >
      <Text style={{ fontSize: 48 }}>AccountScreen</Text>
      <Spacer>
        <Button title="SignOut" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
