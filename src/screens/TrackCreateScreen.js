import "../_mockLocation";
import React, { useEffect, useState } from "react";
import { StyleSheet, Platform } from "react-native";
import { SafeAreaView } from "react-navigation";
import Map from "../components/Map";
import { Text } from "react-native-elements";
import { requestForegroundPermissionsAsync } from "expo-location";

const TrackCreateScreen = () => {
  const [error, setError] = useState(null);

  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      if (!granted) {
        throw new Error("Location permission not granted.");
      }
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
