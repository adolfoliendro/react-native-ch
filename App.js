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
  // const [textInput, setTextInput] = useState("");
  // const [modalVisible, setModalVisible] = useState(false);
  // const [itemSelect, setItemSelect] = useState({});

  // const onAdd = () => {
  //   setList([
  //     ...list,
  //     { id: Math.floor(Math.random() * 1000) + 1, value: textInput },
  //   ]);
  // };

  // const onDelete = (id) => {
  //   setList(list.filter((item) => item.id != id));
  //   setModalVisible(false);
  // };

  // const onHandlerModal = (item) => {
  //   setItemSelect(item);
  //   setModalVisible(true);
  // };

  return (
    // <View style={styles.screen}>
    //   <ModalQuestion
    //     modalVisible={modalVisible}
    //     setModalVisible={setModalVisible}
    //     onDelete={onDelete}
    //     itemSelect={itemSelect}
    //   />
    //   <AddItem setTextInput={setTextInput} onAdd={onAdd} />
    //   <ListItem list={list} onHandlerModal={onHandlerModal} />
    // </View>

    // <View style={styles.screen}>
    //   <Header title={"Menu principal"} />
    //   {/* <ListScreen /> */}
    //   <View style={styles.cardContainer}>
    //     <Card style={styles.card}>
    //       <Text>Notas</Text>
    //       <View style={styles.buttonContainer}>
    //         <Button title="Nuevo"></Button>
    //         <Button title="Buscar"></Button>
    //         <Button title="Ver todo"></Button>
    //       </View>
    //     </Card>
    //     <Card style={styles.card}>
    //       <Text>Notas recientes</Text>
    //       <ListScreen />
    //     </Card>
    //   </View>
    // </View>

    <AppNavigator />
  );
}

const styles = StyleSheet.create({
  // screen: {
  //   backgroundColor: "#fff",
  //   padding: 30,
  //   marginTop: "10%",
  // },
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
