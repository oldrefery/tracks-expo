import React from "react";
import { Button, Text, View } from "react-native";

const TrackListScreen = ({ navigation }) => {
  const handleDetail = () => {
    navigation.navigate("TrackDetail");
  };
  return (
    <View>
      <Text>TrackListScreen</Text>
      <Button title={"Go to Detail Screen"} onPress={handleDetail} />
    </View>
  );
};

export default TrackListScreen;
