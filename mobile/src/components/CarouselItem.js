import React from "react";
import { View, Image, Text, TouchableOpacity, Dimensions } from "react-native";
import { ITEM_WIDTH } from "../utils";

export const CarouselItem = ({ name, imagePath, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Image source={{ uri: imagePath }} style={styles.image} />
    <Text style={styles.text}>{name}</Text>
  </TouchableOpacity>
);

const styles = {
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: ITEM_WIDTH,
  },
  image: {
    width: 39.5,
    height: 40,
  },
  text: {
    marginLeft: 8,
    fontSize: 13,
    fontWeight: "600",
    color: "#434343",
    fontFamily: "ProximaNova-Semibold",
  },
};
