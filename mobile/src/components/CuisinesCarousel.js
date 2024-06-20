import React, { useCallback } from "react";
import { View, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { CarouselItem } from "./CarouselItem";
import useCuisinesData from "../hooks/useCuisinData";

const GRADIENT_COLORS = ["#FFFFFF", "#FFFFFFE6", "#FFFFFF00"];

export const CuisinesCarousel = () => {
  const { firstRowData, secondRowData, selectCategoryHandler } =
    useCuisinesData();

  const renderItem = useCallback(
    ({ item }) => (
      <CarouselItem
        imagePath={item.imagePath}
        name={item.name}
        onPress={() => selectCategoryHandler(item)}
      />
    ),
    [selectCategoryHandler]
  );

  return (
    <View>
      <LinearGradient
        colors={GRADIENT_COLORS}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
        style={styles.gradient}
      />
      <FlatList
        contentContainerStyle={[
          styles.listContainer,
          styles.listContainerMarginTop,
        ]}
        showsHorizontalScrollIndicator={false}
        data={firstRowData}
        horizontal
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      {secondRowData.length > 0 && (
        <FlatList
          contentContainerStyle={styles.listContainer}
          showsHorizontalScrollIndicator={false}
          data={secondRowData}
          horizontal
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

const styles = {
  gradient: {
    position: "absolute",
    height: "100%",
    width: 30,
    right: 0,
    zIndex: 100,
  },
  listContainerMarginTop: {
    marginTop: 15,
  },
  listContainer: {
    alignSelf: "flex-start",
    paddingLeft: 18,
    paddingRight: 18,
    marginBottom: 11,
    gap: 20,
  },
};
