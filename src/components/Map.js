import React, { useContext } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
  const {
    state: { currentLocation },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      }}
      showsUserLocation={true}
    />
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
  loader: {
    height: 300,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Map;
