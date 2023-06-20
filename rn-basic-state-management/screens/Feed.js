import React from "react";
import { Text, View } from "react-native";
import { HorizontalAvatars } from "../components/HorizontalAvatars";
import { FeedCards } from "../components/FeedCards";
import { SafeAreaView } from "react-native";

export const Feed = () => {
  return (
    <View style={{ flex: 1 }}>
      <HorizontalAvatars />
      <FeedCards />
    </View>
  );
};
