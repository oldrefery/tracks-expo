import React, { useCallback, useContext } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import { Text } from "react-native-elements";

import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// import "../_mockLocation";

const TrackCreateScreen = ({ isFocused }) => {
  const {
    addLocation,
    state: { isRecording },
  } = useContext(LocationContext);
  const callback = useCallback(
    (location) => addLocation(location, isRecording),
    [isRecording]
  );

  const [err] = useLocation(isFocused || isRecording, callback);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Create a Track</Text>
      <Map />
      {err ? (
        <Text style={styles.error}>Please enable location services</Text>
      ) : null}
      <TrackForm />
    </SafeAreaView>
  );
};

TrackCreateScreen.navigationOptions = {
  title: "Add track",
  tabBarIcon: <MaterialCommunityIcons name="map-marker-plus" size={20} />,
};

const styles = StyleSheet.create({
  error: {
    color: "red",
    fontSize: 24,
  },
});

export default withNavigationFocus(TrackCreateScreen);
