import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { FlatList, View } from "react-native";
import { cards as listOfCards } from "./../data/cards";

export const FeedCards = () => {
  const [cards, setCards] = useState([]);
  const renderFlatListItem = ({ item }) => (
    <Image
      style={{ borderRadius: 24, height: 250, marginBottom: 32, width: "100%" }}
      source={{ uri: item.url }}
    />
  );

  useEffect(() => {
    setCards(listOfCards);
    console.log(listOfCards);

  }, []);

  return (
    <View style={{ paddingVertical: 30 }}>
      <FlatList data={cards} renderItem={renderFlatListItem} />
    </View>
  );
};
