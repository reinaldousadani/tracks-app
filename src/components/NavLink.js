import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { withNavigation } from "react-navigation";

const NavLink = ({ linkText, navigation, targetScreen }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(targetScreen)}>
      <Text style={styles.link}>{linkText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    color: "blue",
    marginHorizontal: 15,
    marginTop: 15,
  },
});

export default withNavigation(NavLink);
