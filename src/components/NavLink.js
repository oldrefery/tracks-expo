import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { withNavigation } from "react-navigation";

import Spacer from "./Spacer";

const NavLink = ({ routeName, title, navigation }) => {
  const handleNavigate = () => {
    navigation.navigate(routeName);
  };

  return (
    <Pressable onPress={handleNavigate} style={styles.link}>
      <Spacer>
        <Text style={styles.linkText}>{title}</Text>
      </Spacer>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  linkText: {
    color: "blue",
  },
  link: {
    alignItems: "center",
  },
});

export default withNavigation(NavLink);
