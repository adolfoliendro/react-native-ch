import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
// import ListScreen from "./ListScreen";
import Card from "../components/Card";
import Header from "../components/Header";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <Header title={"Menu principal"} />
      <View style={styles.cardContainer}>
        <Card style={styles.card}>
          <Text>Notas</Text>
          <View style={styles.buttonContainer}>
            <Button title="Nuevo"></Button>
            <Button title="Buscar"></Button>
            <Button
              title="Ver todo"
              onPress={() => {
                navigation.navigate("ListScreen");
              }}
            ></Button>
          </View>
        </Card>
        <Card style={styles.card}>
          <Text>Notas recientes</Text>
          {/* <ListScreen /> */}
        </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  card: {
    width: 300,
    maxWidth: "80%",
    margin: 10,
    paddingVertical: 20,
    alignItems: "center",
  },
  cardContainer: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingVertical: 20,
  },
  buttonContainer: {
    width: "40%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginTop: 20,
  },
});
