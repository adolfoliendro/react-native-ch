import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Hola, Coder!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Items de lista" style={styles.input} />
        <Button title="ADD" />
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.listElement}>Elemento 1</Text>
        <Text style={styles.listElement}>Elemento 2</Text>
        <Text style={styles.listElement}>Elemento 3</Text>
        <Text style={styles.listElement}>Elemento 4</Text>
        <Text style={styles.listElement}>Elemento 5</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#fff",
    padding: 30,
    marginTop: "10%",
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: "90%",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listContainer: {
    backgroundColor: "#ddd",
    paddingHorizontal: 10,
    paddingBottom: 10,
    marginTop: 20,
  },
  listElement: {
    backgroundColor: "#aaf",
    padding: 10,
    marginTop: 10,
  },
});
