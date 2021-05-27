import React from "react";
import { StyleSheet, Platform } from "react-native";
import { SafeAreaView } from "react-navigation";
import Map from "../components/Map";
import { Text } from "react-native-elements";

const TrackCreateScreen = () => {
  return (
    <SafeAreaView
      forceInset={{ top: "always" }}
      style={{ paddingTop: Platform.OS === "android" ? 25 : 0 }}
    >
      <Text h2 style={{ textAlign: "center" }}>
        Create a Track !
      </Text>
      <Map />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
