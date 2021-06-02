// import "../_mockLocation";
import React, { useContext, useCallback } from "react";
import { StyleSheet, Platform } from "react-native";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import Map from "../components/Map";
import { Text } from "react-native-elements";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";
import Spacer from "../components/Spacer";
import { AntDesign } from "@expo/vector-icons";

const TrackCreateScreen = ({ isFocused }) => {
  const { state, addLocation } = useContext(LocationContext);
  const callback = useCallback(
    (location) => {
      addLocation(location, state.recording);
    },
    [state.recording]
  );
  const [error] = useLocation(isFocused || state.recording, callback);

  return (
    <SafeAreaView
      forceInset={{ top: "always" }}
      style={{ paddingTop: Platform.OS === "android" ? 25 : 0 }}
    >
      <Text h2 style={{ textAlign: "center" }}>
        Create a Track !
      </Text>
      <Map />
      {error ? <Text>Please grant the location permission.</Text> : null}
      <Spacer />
      <TrackForm />
    </SafeAreaView>
  );
};

TrackCreateScreen.navigationOptions = {
  title: "Add a Track",
  tabBarIcon: (
    <AntDesign
      name="plus"
      size={24}
      color="black"
      style={{ marginTop: 10, marginBottom: 5 }}
    />
  ),
};

export default withNavigationFocus(TrackCreateScreen);
