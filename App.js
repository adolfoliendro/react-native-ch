import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import AddItem from "./components/AddItem";
import ListItem from "./components/ListItem";
import ModalQuestion from "./components/Modal";
import Header from "./components/Header";
import ListScreen from "./screens/ListScreen";
import Card from "./components/Card";
import AppLoading from "expo-app-loading";
import AppNavigator from "./navigation/AppNavigator";

export default function App() {
  // const [list, setList] = useState([]);

  return (

    <AppNavigator />

  );
}

const styles = StyleSheet.create({
  // screen: {
  //   backgroundColor: "#fff",
  //   padding: 30,
  //   marginTop: "10%",
  // },
});
