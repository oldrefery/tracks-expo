import React, { useContext } from "react";
import { Text, FlatList, Pressable } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as TrackContext } from "../context/TrackContext";
import { ListItem } from "react-native-elements";

const TrackListScreen = () => {
  const { state, fetchTracks } = useContext(TrackContext);

  const keyExtractor = (item) => `id: ${item._id}`;

  const renderItem = ({ item }) => {
    return (
      <Pressable>
        <ListItem>
          <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </Pressable>
    );
  };

  return (
    <>
      <NavigationEvents onWillFocus={fetchTracks} />
      <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
      <FlatList
        data={state}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </>
  );
};

export default TrackListScreen;
