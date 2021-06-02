import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context as TrackContext } from "../context/TrackContext";
import { Text } from "react-native-elements";
import MapView, { Polyline } from "react-native-maps";

const TrackDetailsScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam("_id");
  const track = state.find((track) => track._id === _id);
  return (
    <>
      <Text h2 style={{ textAlign: "center" }}>
        {track.name}
      </Text>
      <MapView
        style={{ height: 300 }}
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          latitude: track.locations[0].coords.latitude,
          longitude: track.locations[0].coords.longitude,
        }}
      >
        <Polyline coordinates={track.locations.map((el) => el.coords)} />
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({});

TrackDetailsScreen.navigationOptions = () => {
  return {
    title: "Track Details",
  };
};

export default TrackDetailsScreen;
