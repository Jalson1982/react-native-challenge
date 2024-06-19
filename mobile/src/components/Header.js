import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import ArrowLeft from "../../assets/arrow-left.svg";
import CrossIcon from "../../assets/cross-mark.svg";
import useHeaderData from "../hooks/useHeaderData";

export const Header = () => {
  const { title, parentIds, goBackHandler, backToHomeHandler } =
    useHeaderData();

  return (
    <View style={styles.headerContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.titleContainer}>
          <Image
            source={require("../../assets/browse-cuisines.png")}
            style={styles.titleImage}
          />
          <Text style={styles.titleText}>{title}</Text>
        </View>
        {parentIds.length > 0 && (
          <View style={styles.actionsContainer}>
            <TouchableOpacity onPress={goBackHandler}>
              <ArrowLeft fill="black" />
            </TouchableOpacity>
            <View style={styles.separator}></View>
            <TouchableOpacity onPress={backToHomeHandler}>
              <CrossIcon />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = {
  headerContainer: {
    height: 33,
    backgroundColor: "#ffecc9",
    borderRadius: 17,
    marginHorizontal: 17,
    marginTop: 16,
    justifyContent: "center",
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleImage: {
    height: 30,
    width: 30,
  },
  titleText: {
    marginLeft: 7,
    fontSize: 15,
    fontWeight: "bold",
    color: "#434343",
    fontFamily: "ProximaNova-Bold",
    lineHeight: 18,
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    flex: 1,
    marginRight: 18.4,
    alignItems: "center",
  },
  separator: {
    width: 1,
    height: 19,
    backgroundColor: "rgb(241, 211, 155)",
    borderRadius: 1,
    marginLeft: 16.5,
    marginRight: 16.5,
  },
};
