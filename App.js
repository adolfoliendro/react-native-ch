import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import AddItem from "./components/AddItem";
import ListItem from "./components/ListItem";
import ModalQuestion from "./components/Modal";

export default function App() {
  const [list, setList] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelect, setItemSelect] = useState({});

  const onAdd = () => {
    setList([
      ...list,
      { id: Math.floor(Math.random() * 1000) + 1, value: textInput },
    ]);
  };

  const onDelete = (id) => {
    setList(list.filter((item) => item.id != id));
    setModalVisible(false);
  };

  const onHandlerModal = (item) => {
    setItemSelect(item);
    setModalVisible(true);
  };

  return (
    <View style={styles.screen}>
      <ModalQuestion
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        onDelete={onDelete}
        itemSelect={itemSelect}
      />
      <AddItem setTextInput={setTextInput} onAdd={onAdd} />
      <ListItem list={list} onHandlerModal={onHandlerModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#fff",
    padding: 30,
    marginTop: "10%",
  },
});
