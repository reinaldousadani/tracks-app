import React, { useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";
import { Button, Text } from "react-native-elements";
import Spacer from "../components/Spacer";
import { View, StyleSheet, Platform } from "react-native";
import { SafeAreaView } from "react-navigation";
import { AntDesign } from "@expo/vector-icons";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView
      forceInset={{ top: "always" }}
      style={{ paddingTop: Platform.OS === "android" ? 25 : 0 }}
    >
      <Text h2 style={{ textAlign: "center" }}>
        Account Screen
      </Text>
      <Spacer>
        <Button title="SignOut" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = {
  title: "Account",
  tabBarIcon: (
    <AntDesign
      name="user"
      size={24}
      color="black"
      style={{ marginBottom: 5, marginTop: 10 }}
    />
  ),
};

export default AccountScreen;
