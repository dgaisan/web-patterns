import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { FlatList, View } from "react-native";
import { avatars as listOfAvatars } from "./../data/avatars";

export const HorizontalAvatars = () => {
  const [avatars, setAvatars] = useState([]);
  const renderFlatListItem = ({ item }) => (
    <Image
      style={{ width: 60, height: 60, borderRadius: 50, marginRight: 10 }}
      source={{ uri: item.url }}
    />
  );

  useEffect(() => {
    setAvatars(listOfAvatars);
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <FlatList data={avatars} renderItem={renderFlatListItem} horizontal />
    </View>
  );
};
