import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Text } from "react-native-elements";

import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
// import "../_mockLocation";

const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext);
  const [err] = useLocation(addLocation);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Create a Track</Text>
      <Map />
      {err ? (
        <Text style={styles.error}>Please enable location services</Text>
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  error: {
    color: "red",
    fontSize: 24,
  },
});

export default TrackCreateScreen;
