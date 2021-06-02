import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context as TrackContext } from "../context/TrackContext";
import { Text } from "react-native-elements";

const TrackDetailsScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam("_id");
  const track = state.find((track) => track._id === _id);
  return (
    <Text h2 style={{ textAlign: "center" }}>
      {track.name}
    </Text>
  );
};

const styles = StyleSheet.create({});

TrackDetailsScreen.navigationOptions = () => {
  return {
    title: "Track Details",
  };
};

export default TrackDetailsScreen;
