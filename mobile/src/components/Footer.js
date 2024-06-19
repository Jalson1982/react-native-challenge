import { View, StyleSheet } from "react-native";

export const Footer = () => {
  return (
    <View style={styles.bottomBarContainer}>
      <View style={styles.bottomBar}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBarContainer: {
    width: "100%",
    justifyContent: "center",
    marginBottom: 6,
    alignItems: "center",
    marginTop: 11,
  },
  bottomBar: {
    width: 50,
    height: 5,
    borderRadius: 100,
    backgroundColor: "#bbbbbb",
  },
});
