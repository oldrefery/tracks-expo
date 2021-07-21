import React from "react";
import { SafeAreaView } from "react-navigation";
import Map from "../components/Map";
import { Text } from "react-native-elements";

const TrackCreateScreen = () => {
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Create a Track</Text>
      <Map />
    </SafeAreaView>
  );
};

export default TrackCreateScreen;
