import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Context as TrackContext } from "../context/TrackContext";
import MapView, { Polyline } from "react-native-maps";

const TrackDetailScreen = ({ navigation }) => {
  const _id = navigation.getParam("_id");
  const { state } = useContext(TrackContext);

  const track = state.find((tr) => tr._id === _id);
  const coords = track.locations.map((location) => location.coords);

  const initialRegion = {
    ...track.locations[0].coords,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <View>
      <Text>{track.name}</Text>
      <MapView style={styles.map} initialRegion={initialRegion}>
        <Polyline coordinates={track.locations.map((loc) => loc.coords)} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default TrackDetailScreen;
