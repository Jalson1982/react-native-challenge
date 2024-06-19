import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import TimeIcon from "../../assets/timeIcon.svg";
import { Chip } from "./Chip";

export const ChipScrollView = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollView}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <Chip label="ANYTIME" icon={<TimeIcon />} />
      <Chip label="ALL" icon={<TimeIcon />} />
      <Chip label="ALL CHAINS" icon={<TimeIcon />} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 18,
    marginTop: 11,
    gap: 8,
  },
});
