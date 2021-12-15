import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";

export default function App() {
  const [list, setList] = useState([]);
  const [textInput, setTextInput] = useState("");

  const onAdd = () => {
    setList([
      ...list,
      { id: Math.floor(Math.random() * 100) + 1, value: textInput },
    ]);
  };

  const onDelete = (id) => {
    setList(list.filter((item) => item.id != id));
  };

  return (
    // <View style={styles.container}>
    //   <Text>Hola, Coder!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Escribir item"
          style={styles.input}
          onChangeText={(text) => setTextInput(text)}
        />
        <Button onPress={() => onAdd()} title="ADD" />
      </View>
      <View style={styles.listContainer}>
        {list.length > 0 ? (
          // (
          // list.map((item) => (
          //   <View style={styles.listElement}>
          //     <Text>{item}</Text>
          //     <Button onPress={() => onDelete(item)} title="X" />
          //   </View>
          // )))
          <FlatList
            data={list}
            renderItem={(data) => (
              <View style={styles.listElement}>
                <Text>{data.item.value}</Text>
                <Button onPress={() => onDelete(data.item.id)} title="X" />
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <Text> No hay tareas </Text>
        )}
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
    padding: 20,
    marginTop: 20,
  },
  listElement: {
    backgroundColor: "#aaf",
    padding: 10,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
