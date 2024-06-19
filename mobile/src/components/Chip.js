import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const Chip = ({ label, icon }) => {
  return (
    <TouchableOpacity style={styles.button}>
      {icon}
      {label && <Text style={styles.text}>{label}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 27,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#ececec",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
    padding: 6,
    marginHorizontal: 4,
  },
  text: {
    fontSize: 11.5,
    fontWeight: "bold",
    lineHeight: 15,
    letterSpacing: 0.5,
    color: "#888888",
    marginLeft: 5,
    fontFamily: "ProximaNova-Bold",
  },
});
