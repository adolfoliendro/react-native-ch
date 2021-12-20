import React from "react";
import { StyleSheet, View } from "react-native";

export default function Card(props) {
  const { style, children } = props;

  return <View style={{ ...styles.inputCard, ...style }}>{children}</View>;
}

const styles = StyleSheet.create({
  inputCard: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },
});
