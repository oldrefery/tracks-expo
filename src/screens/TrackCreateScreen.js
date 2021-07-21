import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-navigation";
import { requestForegroundPermissionsAsync } from "expo-location";
import { Text } from "react-native-elements";

import Map from "../components/Map";
import { StyleSheet } from "react-native";

const TrackCreateScreen = () => {
  const [err, setErr] = useState(null);

  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      if (!granted) {
        throw new Error("Location permission not granted");
      }
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    startWatching().then();
  }, []);

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
