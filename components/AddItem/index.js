import React from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

export default function AddItem(props) {
  const { setTextInput, onAdd } = props;

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Escribir nota"
        style={styles.input}
        onChangeText={(text) => setTextInput(text)}
      />
      <Button onPress={() => onAdd()} title="Agregar" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: "70%",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
