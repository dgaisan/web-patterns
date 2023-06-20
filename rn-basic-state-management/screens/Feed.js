import React from "react";
import { View } from "react-native";
import { HorizontalAvatars } from "../components/HorizontalAvatars";
import { FeedCards } from "../components/FeedCards";

export const Feed = () => {
  return (
    <View style={{ flex: 1 }}>
      <HorizontalAvatars />
      <FeedCards />
    </View>
  );
};
