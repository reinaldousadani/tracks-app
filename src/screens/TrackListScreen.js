import React, { useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { Context as TrackContext } from "../context/TrackContext";
import { NavigationEvents } from "react-navigation";
import { ListItem, Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);

  return (
    <SafeAreaView
      forceInset={{ top: "always" }}
      style={{ paddingTop: Platform.OS === "android" ? 25 : 0 }}
    >
      <NavigationEvents onWillFocus={fetchTracks} />
      <Text h2 style={{ textAlign: "center" }}>
        Track Screen
      </Text>
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <ListItem>
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

TrackListScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default TrackListScreen;
