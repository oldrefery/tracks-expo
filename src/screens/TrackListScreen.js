import React, { useContext } from "react";
import { Text, FlatList, Pressable } from "react-native";
import { NavigationEvents, SafeAreaView } from "react-navigation";
import { Context as TrackContext } from "../context/TrackContext";
import { ListItem } from "react-native-elements";
import { hasServicesEnabledAsync } from "expo-location";

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);

  const keyExtractor = (item) => `id: ${item._id}`;

  const renderItem = ({ item }) => {
    return (
      <Pressable onPress={() => handleSelectTrack(item._id)}>
        <ListItem>
          <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </Pressable>
    );
  };

  const handleSelectTrack = (_id) => {
    navigation.navigate("TrackDetail", { _id });
  };

  return (
    <SafeAreaView>
      <NavigationEvents onWillFocus={fetchTracks} />
      <FlatList
        data={state}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

TrackListScreen.navigationOptions = () => {
  return {
    title: "Tracks",
  };
};

export default TrackListScreen;
